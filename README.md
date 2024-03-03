# @anio-node-foundation/fs-hash-file

Synchronously calculate the checksum of a file.

```js
import nodeFsHashFile from "@anio-node-foundation/fs-hash-file"

console.log(
	await nodeFsHashFile("./examples/example.mjs", "sha256")
)

console.log(
	nodeFsHashFile.sync("./examples/example.mjs", "sha1", "base64")
)
```
