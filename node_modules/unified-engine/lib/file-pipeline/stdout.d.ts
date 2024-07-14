/**
 * Write a virtual file to `streamOut`.
 * Ignored when `output` is given, more than one file was processed, or `out`
 * is false.
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
export function stdout(context: Context, file: VFile, next: Callback): undefined;
export type Callback = import('trough').Callback;
export type VFile = import('vfile').VFile;
export type Context = import('./index.js').Context;
//# sourceMappingURL=stdout.d.ts.map