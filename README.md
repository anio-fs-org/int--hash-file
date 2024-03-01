# @anio-js-foundation/node-fs-hash-file

Synchronously calculate the checksum of a file.

```js
import nodeFsHashFile from "@anio-js-foundation/node-fs-hash-file"

console.log(
	await nodeFsHashFile("./examples/example.mjs", "sha256")
)

console.log(
	nodeFsHashFile.sync("./examples/example.mjs", "sha1", "base64")
)
```
