export default {
	realm: "js",
	type: "package:async/sync",

	target: {
		function_name: "hashFile",

		dependencies: {
			"@anio-fs/int--read-file-in-chunks": "readFileInChunks"
		}
	}
}
