import {generateFromTemplate} from "vipen/autogenerate"

const asyncToSync = {
	"export default async function": "export default function",
	"await nodeFsReadFileInChunks": "nodeFsReadFileInChunks.sync",
	"await file.readNextChunk()": "file.readNextChunk()"
}

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"sync.mjs": generateFromTemplate("src/template.mjs", asyncToSync),
		"async.mjs": generateFromTemplate("src/template.mjs", {})
	}
}
