import async_impl from "./auto/async.mjs"
import sync_impl from "./auto/sync.mjs"

export function hashFile(file_path, algo, hash_encoding = "hex") {
	return async_impl(file_path, algo, hash_encoding)
}

export function hashFileSync(file_path, algo, hash_encoding = "hex") {
	return sync_impl(file_path, algo, hash_encoding)
}
