import {hashFileSyncFactory as factory} from "#~auto/export/hashFileSyncFactory.mts"

/* ImplementationDocType is needed to make doctypes work in LSP */
import type {ImplementationDocType} from "#~auto/ImplementationSyncDocType.d.mts"

const impl = factory()

export const hashFileSync : ImplementationDocType = impl
