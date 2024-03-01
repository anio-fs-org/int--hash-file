import async_impl from "./auto/async.mjs"
import sync_impl from "./auto/sync.mjs"

function nodeFsHashFile(file_path, algo, hash_encoding = "hex") {
	return async_impl(file_path, algo, hash_encoding)
}

nodeFsHashFile.sync = function(file_path, algo, hash_encoding = "hex") {
	return sync_impl(file_path, algo, hash_encoding)
}

export default nodeFsHashFile
