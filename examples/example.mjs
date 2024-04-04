import {hashFile, hashFileSync} from "../src/index.mjs"

console.log(
	await hashFile("./examples/example.mjs", "sha256")
)

console.log(
	hashFileSync("./examples/example.mjs", "sha1", "base64")
)
