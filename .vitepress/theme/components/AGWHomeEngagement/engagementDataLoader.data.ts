/*--------------------------------------------------------------
 Thx Karlstens (https://github.com/Karlstens) for lastUpdated code
    https://github.com/vuejs/vitepress/discussions/3515

---------------------------------------------------------------*/

import { spawn } from "cross-spawn";
import fs from "fs";
import path from "path";
import pMap from "p-map";
import { createContentLoader } from "vitepress";

const loader = createContentLoader("/**/*.md", {
	async transform(rawData) {
		const data = await pMap(
			rawData,
			async (item) => {
				const lastUpdated: any = await getLastUpdated(item.url);
				return { ...item, lastUpdated };
			},
			{ concurrency: 64 }
		);
		data.sort((a, b) => b.lastUpdated - a.lastUpdated);
		return data;
	},
});

async function getLastUpdated(url) {
	const siteConfig = globalThis.VITEPRESS_CONFIG;

	let file = url.replace(/(^|\/)$/, "$1index");
	file = file.replace(/(\.html)?$/, ".md");
	file = siteConfig.rewrites.inv[file] || file;
	file = path.join(siteConfig.srcDir, file);

	return new Promise((resolve, reject) => {
		const cwd = path.dirname(file);
		if (!fs.existsSync(cwd)) return resolve(0);
		const fileName = path.basename(file);
		const child = spawn("git", ["log", "-1", '--pretty="%ai"', fileName], {
			cwd,
		});
		let output = "";
		child.stdout.on("data", (data) => (output += String(data)));
		child.on("close", () => resolve(new Date(output).getTime()));
		child.on("error", reject);
	});
}

export const data = await loader.load();
export default loader;