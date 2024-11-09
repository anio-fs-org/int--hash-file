/* define and describe your function api here */
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
export type ImplementationDocType = {
       /**
        * @brief My function's description
        */
     (file_path : string, algo : string, hash_encoding? : string) : string | Buffer
}
