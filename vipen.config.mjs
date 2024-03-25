import {searchAndReplace, copyFile} from "vipen/processing"

const asyncToSync = {
	"export default async function": "export default function",
	"await nodeFsReadFileInChunks": "nodeFsReadFileInChunks.sync",
	"await file.readNextChunk()": "file.readNextChunk()"
}

export default {
	realm: "js",
	type: "package",

	preprocessing: [
		searchAndReplace("src/template.mjs", asyncToSync, "src/auto/sync.mjs"),
		copyFile("src/template.mjs", "src/auto/async.mjs")
	]
}
