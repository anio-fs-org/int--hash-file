import {readFileInChunksSync} from "@anio-fs/int--read-file-in-chunks"
export type DependenciesType = {
	readFileInChunks: typeof readFileInChunksSync,
}
