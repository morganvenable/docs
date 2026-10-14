// Wording rules for every page. Exits 1 with file:line for each finding.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const RULES = [
	[/\bTRRS\b/i, 'say "split cable", never TRRS'],
	[/\bviable\b/i, 'never mention Viable'],
	[/scan ?lab/i, 'Scan Lab is not public'],
	[/\b(colour|grey|behaviour|centre|favourite|organise|recognise|licence)\w*/i, 'American spelling'],
];

const files = [];
const walk = (dir) => {
	for (const name of readdirSync(dir)) {
		const p = join(dir, name);
		if (statSync(p).isDirectory()) walk(p);
		else if (/\.mdx?$/.test(name)) files.push(p);
	}
};
walk('src/content/docs');

let failures = 0;
for (const file of files) {
	readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
		for (const [re, why] of RULES) {
			if (re.test(line)) {
				console.log(`${file}:${i + 1}: ${why}: ${line.trim().slice(0, 100)}`);
				failures++;
			}
		}
	});
}
console.log(failures ? `${failures} wording findings` : `wording ok (${files.length} pages)`);
process.exit(failures ? 1 : 0);
