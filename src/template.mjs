import {createHash} from "node:crypto"
import {readFileInChunks} from "@anio-fs/int--read-file-in-chunks"

export default async function(file_path, algo, hash_encoding = "hex") {
	const hash = createHash(algo)

	//
	// read file in 4096 byte chunks
	//
	const file = await readFileInChunks(file_path, 4096)

	while (true) {
		const chunk = await file.readNextChunk()

		if (!chunk) break

		hash.update(chunk)
	}

	hash.setEncoding(hash_encoding)
	hash.end()

	return hash.read()
}
