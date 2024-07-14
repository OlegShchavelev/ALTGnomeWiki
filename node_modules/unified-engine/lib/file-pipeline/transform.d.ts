/**
 * Transform the tree associated with a file with configured plugins.
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
export function transform(context: Context, file: VFile, next: Callback): undefined;
export type Callback = import('trough').Callback;
export type VFile = import('vfile').VFile;
export type Context = import('./index.js').Context;
//# sourceMappingURL=transform.d.ts.map