import {hashFileFactory as factory} from "#~auto/export/hashFileFactory.mts"

/* ImplementationDocType is needed to make doctypes work in LSP */
import type {ImplementationDocType} from "#~auto/ImplementationDocType.d.mts"

const impl = factory()

export const hashFile : ImplementationDocType = impl
