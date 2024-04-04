# @anio-node-foundation/fs-hash-file

Synchronously calculate the checksum of a file.

```js
import {hashFile, hashFileSync} from "@anio-node-foundation/fs-hash-file"

console.log(
	await hashFile("./examples/example.mjs", "sha256")
)

console.log(
	hashFileSync("./examples/example.mjs", "sha1", "base64")
)
```
