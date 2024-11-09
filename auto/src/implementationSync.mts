/* -------- required imports by template -------- */
import type {ContextInstance} from "@fourtune/realm-js/v0/runtime"
import type {DependenciesType} from "#~auto/DependenciesSyncType.d.mts"

import type {ImplementationDocType} from "#~auto/ImplementationSyncDocType.d.mts"
/* -------- required imports by template -------- */

import {createHash} from "node:crypto"

export default function(
	context : ContextInstance,
	dependencies : DependenciesType,
	/* add additional parameters here */
	file_path : string,
	algo : string,
	hash_encoding? : string
) : ReturnType<ImplementationDocType> {
	const hash = createHash(algo)

	//
	// read file in 4096 byte chunks
	//
	const file = dependencies.readFileInChunks(file_path, 4096)

	while (true) {
		const chunk = file.readNextChunk()

		if (!chunk) break

		hash.update(chunk)
	}

	hash.setEncoding(hash_encoding as BufferEncoding)
	hash.end()

	return hash.read()
}

