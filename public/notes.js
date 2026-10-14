// Owner notes: select text, dictate a note, file it in a private inbox.
// Off for everyone. Turn on in one browser with ?notes=on, off with ?notes=off.
(() => {
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
		if (localStorage.getItem(KEY) !== '1') return;
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

	const open = (quote, section) => {
		close();
		sheet = document.createElement('div');
		sheet.className = 'svn-sheet';
		sheet.setAttribute('role', 'dialog');
		sheet.setAttribute('aria-label', 'Note');
		if (quote) sheet.append(Object.assign(document.createElement('blockquote'), { className: 'svn-quote', textContent: quote }));
		const text = Object.assign(document.createElement('textarea'), { placeholder: 'Note' });
		const row = Object.assign(document.createElement('div'), { className: 'svn-row' });
		const cancel = Object.assign(document.createElement('button'), { textContent: 'Cancel', type: 'button' });
		const send = Object.assign(document.createElement('button'), { textContent: 'File note', type: 'button', className: 'svn-send' });
		row.append(cancel, send);
		sheet.append(text, row);
		document.body.append(sheet);
		text.focus();

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
			const title = `${page}: ${note.replace(/\s+/g, ' ').slice(0, 70)}`;
			const q = new URLSearchParams({ title, body, labels: 'note' });
			window.open(`${INBOX}?${q}`, '_blank', 'noopener');
			close();
		};
		send.addEventListener('click', submit);
		cancel.addEventListener('click', close);
		text.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(); }
			if (e.key === 'Escape') close();
		});
	};

	function close() {
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
})();
