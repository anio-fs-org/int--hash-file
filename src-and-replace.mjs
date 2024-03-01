export default [{
	file: "./src/template.mjs",
	items: {
		"export default async function": "export default function",
		"await nodeFsReadFileInChunks": "nodeFsReadFileInChunks.sync",
		"await file.readNextChunk()": "file.readNextChunk()"
	},
	output: "./src/auto/sync.mjs"
}, {
	file: "./src/template.mjs",
	items: {},
	output: "./src/auto/async.mjs"
}]
