import {hashFile, hashFileSync} from "../dist/default/index.mjs"

console.log(
	await hashFile("./examples/example.mjs", "sha256", "hex")
)

console.log(
	hashFileSync("./examples/example.mjs", "sha1", "base64")
)
