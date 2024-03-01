import nodeFsHashFile from "../src/index.mjs"

console.log(
	await nodeFsHashFile("./examples/example.mjs", "sha256")
)

console.log(
	nodeFsHashFile.sync("./examples/example.mjs", "sha1", "base64")
)
