/**
 * @brief Asynchronously hash file.
 * @description
 * Asynchronously calculates the hash of `file_path` using algorithm `algo`.
 * @param file_path File to be hashed.
 * @param algo Hash algorithm to use.
 * @param hash_encoding Encoding of the hash, defaults to `hex`.
 * @return
 * Returns hash in specified encoding `hash_encoding`. The default encoding is `hex`.
 */
export function hashFile(file_path : string, algo : string, hash_encoding? : string) : Promise<string | Buffer>;

/**
 * @brief Synchronously hash file.
 * @description
 * Synchronously calculates the hash of `file_path` using algorithm `algo`.
 * @param file_path File to be hashed.
 * @param algo Hash algorithm to use.
 * @param hash_encoding Encoding of the hash, defaults to `hex`.
 * @return
 * Returns hash in specified encoding `hash_encoding`. The default encoding is `hex`.
 */
export function hashFileSync(file_path : string, algo : string, hash_encoding? : string) : string | Buffer;
