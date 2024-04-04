import {generateFromTemplate} from "vipen/autogenerate"

const asyncToSync = {
	"import {readFileInChunks} from \"@anio-fs/int--read-file-in-chunks\"": "import {readFileInChunksSync} from \"@anio-fs/int--read-file-in-chunks\"",
	"export default async function": "export default function",
	"await readFileInChunks": "readFileInChunksSync",
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
