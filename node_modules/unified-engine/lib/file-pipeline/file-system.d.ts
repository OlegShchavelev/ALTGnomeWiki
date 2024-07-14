/**
 * Write a virtual file to the file-system.
 * Ignored when `output` is not given.
 *
 * @param {Context} context
 *   Context.
 * @param {VFile} file
 *   File.
 * @param {Callback} next
 *   Callback.
 * @returns {undefined}
 *   Nothing.
 */
export function fileSystem(context: Context, file: VFile, next: Callback): undefined;
export type Callback = import('trough').Callback;
export type VFile = import('vfile').VFile;
export type Context = import('./index.js').Context;
//# sourceMappingURL=file-system.d.ts.map