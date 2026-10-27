// Owner notes: select text, dictate a note, file it in a private inbox.
// On the local review server (astro dev with DOCS_NOTES_DIR) it is always on and
// saves to this PC. On the public site it is off for everyone; turn it on in one
// browser with ?notes=on (notes then go to a private GitHub repo).
(() => {
	// *.localhost names (docs.sval.localhost) are the review hub's proxy to the same local server.
	const LOCAL = ['localhost', '127.0.0.1'].includes(location.hostname) || location.hostname.endsWith('.localhost');
	const KEY = 'svalboard-docs-notes';
	const INBOX = 'https://github.com/morganvenable/docs-notes/issues/new';
	const params = new URLSearchParams(location.search);
	try {
		if (params.get('notes') === 'on') localStorage.setItem(KEY, '1');
		if (params.get('notes') === 'off') localStorage.removeItem(KEY);
		if (params.has('notes')) {
			params.delete('notes');
			const q = params.toString();
			history.replaceState(null, '', location.pathname + (q ? '?' + q : '') + location.hash);
		}
		if (!LOCAL && localStorage.getItem(KEY) !== '1') return;
	} catch {
		return;
	}

	const css = `
.svn-btn{position:fixed;z-index:1000;font:600 13px/1 var(--sl-font,system-ui);padding:7px 10px;border-radius:6px;border:1px solid var(--sl-color-accent);background:var(--sl-color-accent);color:var(--sl-color-text-invert);cursor:pointer;box-shadow:var(--sl-shadow-md)}
.svn-page{right:16px;bottom:16px}
.svn-sheet{position:fixed;z-index:1001;left:50%;bottom:16px;transform:translateX(-50%);width:min(640px,calc(100vw - 32px));background:var(--sl-color-bg);color:var(--sl-color-text);border:1px solid var(--sl-color-gray-5);border-radius:8px;box-shadow:var(--sl-shadow-lg);padding:12px;display:grid;gap:8px}
.svn-quote{max-height:7em;overflow:auto;margin:0;padding:6px 10px;border-left:3px solid var(--sl-color-accent);color:var(--sl-color-gray-2);font-size:13px;white-space:pre-wrap}
.svn-sheet textarea{width:100%;min-height:6em;resize:vertical;font:inherit;padding:8px;border-radius:6px;border:1px solid var(--sl-color-gray-5);background:var(--sl-color-bg-nav);color:var(--sl-color-text)}
.svn-row{display:flex;gap:8px;justify-content:flex-end}
.svn-row button{font:600 13px/1 var(--sl-font,system-ui);padding:8px 12px;border-radius:6px;border:1px solid var(--sl-color-gray-5);background:transparent;color:var(--sl-color-text);cursor:pointer}
.svn-toast{position:fixed;z-index:1002;right:16px;bottom:64px;font:600 13px/1 var(--sl-font,system-ui);padding:8px 12px;border-radius:6px;background:var(--sl-color-gray-6);color:var(--sl-color-text);box-shadow:var(--sl-shadow-md)}
.svn-row button.svn-send{background:var(--sl-color-accent);border-color:var(--sl-color-accent);color:var(--sl-color-text-invert)}`;
	document.head.append(Object.assign(document.createElement('style'), { textContent: css }));

	const content = () => document.querySelector('.sl-markdown-content') || document.querySelector('main');
	let sheet = null;

	// The heading above a node: gives the note a section and an anchor.
	const sectionOf = (node) => {
		let el = node && (node.nodeType === 1 ? node : node.parentElement);
		const headings = [...document.querySelectorAll('main h2[id], main h3[id], main h4[id]')];
		let found = null;
		for (const h of headings) {
			if (el && h.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING) found = h;
		}
		return found ? { id: found.id, text: found.textContent.trim() } : null;
	};

	// The draft survives a page reload (the local review server reloads a page after each edit).
	const DRAFT = 'svalboard-docs-note-draft';
	const saveDraft = (d) => { try { d ? sessionStorage.setItem(DRAFT, JSON.stringify(d)) : sessionStorage.removeItem(DRAFT); } catch {} };
	const loadDraft = () => { try { return JSON.parse(sessionStorage.getItem(DRAFT) || 'null'); } catch { return null; } };

	// Local review only: the server presses the owner's dictation hotkey (start/stop toggle).
	let dictating = false;
	const reportOpen = (open) => {
		if (LOCAL) fetch('/__notes/state', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ open, path: location.pathname }), keepalive: true }).catch(() => {});
	};
	const toggleDictation = () => (LOCAL ? fetch('/__notes/key', { method: 'POST' }).then((r) => r.ok, () => false) : Promise.resolve(false));
	// The Dictate browser extension, when installed, owns the hotkey: this page then asks it
	// to start and stop (dictate:start / dictate:stop) and never presses the key itself.
	const extension = () => document.documentElement.dataset.dictateExtension === '1';
	const extListening = (el) => ['starting', 'listening'].includes(el.dataset.dictateState);

	const open = (quote, section, draft = '', resumed = false) => {
		close();
		sheet = document.createElement('div');
		sheet.className = 'svn-sheet';
		sheet.setAttribute('role', 'dialog');
		sheet.setAttribute('aria-label', 'Note');
		if (quote) sheet.append(Object.assign(document.createElement('blockquote'), { className: 'svn-quote', textContent: quote }));
		const text = Object.assign(document.createElement('textarea'), { placeholder: 'Note' });
		text.dataset.dictate = '';
		const row = Object.assign(document.createElement('div'), { className: 'svn-row' });
		const cancel = Object.assign(document.createElement('button'), { textContent: 'Cancel', type: 'button' });
		const send = Object.assign(document.createElement('button'), { textContent: 'File note', type: 'button', className: 'svn-send' });
		row.append(cancel, send);
		// Clicking a button must not take focus from the box: dictated text lands where focus is.
		for (const b of [cancel, send]) b.addEventListener('mousedown', (e) => e.preventDefault());
		sheet.append(text, row);
		document.body.append(sheet);
		reportOpen(true);
		text.value = draft;
		text.focus();
		text.setSelectionRange(text.value.length, text.value.length);
		const keep = () => saveDraft({ quote, section, text: text.value, path: location.pathname, dictating });
		if (extension()) {
			dictating = false;
			if (!resumed) text.dispatchEvent(new CustomEvent('dictate:start'));
		} else if (!resumed && LOCAL) {
			toggleDictation().then((ok) => { dictating = ok; keep(); });
		}
		keep();
		text.addEventListener('input', keep);

		// Stop dictation, then wait for its text to land. Resolves true once the box has
		// changed, at least 1.5 s have passed, and nothing has changed for 1.2 s; false
		// if no text arrives within 20 s (the note then stays open, unfiled).
		const stopDictation = () => new Promise((resolve) => {
			if (!dictating) return resolve(true);
			dictating = false;
			keep();
			const before = text.value;
			let last = before, stableSince = Date.now();
			const started = Date.now();
			toggleDictation();
			const tick = setInterval(() => {
				if (!sheet) { clearInterval(tick); return resolve(false); }
				if (text.value !== last) { last = text.value; stableSince = Date.now(); }
				const now = Date.now();
				const landed = text.value !== before && now - started > 1500 && now - stableSince > 1200;
				if (landed || now - started > 20000) {
					clearInterval(tick);
					resolve(landed);
				}
			}, 100);
		});

		const submit = () => {
			const note = text.value.trim();
			if (!note) return text.focus();
			const page = document.querySelector('main h1')?.textContent.trim() || document.title;
			const url = location.origin + location.pathname + (section ? '#' + section.id : '');
			const body = [
				`Page: ${url}`,
				section ? `Section: ${section.text}` : null,
				quote ? `\nQuote:\n${quote.slice(0, 1500).split('\n').map((l) => '> ' + l).join('\n')}` : null,
				`\nNote:\n${note}`,
			].filter((x) => x !== null).join('\n');
			close();
			if (LOCAL) {
				fetch('/__notes', {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify({ page, path: location.pathname, section, quote, note }),
				}).then((r) => toast(r.ok ? 'Filed' : 'Not filed'), () => toast('Not filed'));
				return;
			}
			const title = `${page}: ${note.replace(/\s+/g, ' ').slice(0, 70)}`;
			const q = new URLSearchParams({ title, body, labels: 'note' });
			window.open(`${INBOX}?${q}`, '_blank', 'noopener');
		};
		const file = () => {
			if (extension()) {
				const state = text.dataset.dictateState;
				if (!state || state === 'idle') return submit();
				if (send.disabled) return;
				send.disabled = true;
				send.textContent = 'Filing';
				// The extension refocuses the box, stops, and reports once the words have landed.
				text.addEventListener('dictate:landed', (e) => {
					send.disabled = false;
					send.textContent = 'File note';
					if (e.detail === 'true') submit();
					else text.focus();
				}, { once: true });
				if (extListening(text)) text.dispatchEvent(new CustomEvent('dictate:stop'));
				return;
			}
			if (!dictating) return submit();
			text.focus();
			text.setSelectionRange(text.value.length, text.value.length);
			send.disabled = true;
			send.textContent = 'Filing';
			stopDictation().then((landed) => {
				send.disabled = false;
				send.textContent = 'File note';
				if (landed) submit();
				else text.focus();
			});
		};
		const discard = () => {
			if (extension() && extListening(text)) text.dispatchEvent(new CustomEvent('dictate:stop'));
			if (dictating) { dictating = false; toggleDictation(); }
			close();
		};
		send.addEventListener('click', file);
		cancel.addEventListener('click', discard);
		text.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); file(); }
			if (e.key === 'Escape') discard();
		});
	};

	function toast(text) {
		const t = Object.assign(document.createElement('div'), { className: 'svn-toast', textContent: text, role: 'status' });
		document.body.append(t);
		setTimeout(() => t.remove(), 1600);
	}

	function close() {
		saveDraft(null);
		if (sheet) reportOpen(false);
		sheet?.remove();
		sheet = null;
	}

	// A note on the whole page, from the corner.
	const pageBtn = Object.assign(document.createElement('button'), { className: 'svn-btn svn-page', textContent: 'Note', type: 'button' });
	pageBtn.addEventListener('click', () => open('', null));
	document.body.append(pageBtn);

	// A note on a selection, from a button beside it.
	const selBtn = Object.assign(document.createElement('button'), { className: 'svn-btn', textContent: 'Note', type: 'button', hidden: true });
	document.body.append(selBtn);
	let pending = null;
	selBtn.addEventListener('mousedown', (e) => e.preventDefault());
	selBtn.addEventListener('click', () => {
		selBtn.hidden = true;
		if (pending) open(pending.quote, pending.section);
	});
	document.addEventListener('selectionchange', () => {
		const sel = getSelection();
		const root = content();
		if (!sel || sel.isCollapsed || !root || !root.contains(sel.anchorNode) || sheet) {
			selBtn.hidden = true;
			return;
		}
		const quote = sel.toString().trim();
		if (!quote) { selBtn.hidden = true; return; }
		const r = sel.getRangeAt(0).getBoundingClientRect();
		pending = { quote, section: sectionOf(sel.anchorNode) };
		selBtn.style.top = Math.max(8, r.top - 40) + 'px';
		selBtn.style.left = Math.min(innerWidth - 80, Math.max(8, r.right - 40)) + 'px';
		selBtn.hidden = false;
	});
	addEventListener('scroll', () => { selBtn.hidden = true; }, { passive: true });

	// Reopen an unfinished note after a reload on the same page.
	const draft = loadDraft();
	if (draft && draft.path === location.pathname) {
		dictating = !!draft.dictating;
		open(draft.quote, draft.section, draft.text, true);
	}
})();
