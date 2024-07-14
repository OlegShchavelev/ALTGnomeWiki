/**
 * Collect configuration for a file based on the context.
 *
 * @param {Context} context
 *   Context.
 * @param {VFile} file
 *   File.
 * @param {Callback} next
 *   Callback
 * @returns {undefined}
 *   Nothing
 */
export function configure(context: Context, file: VFile, next: Callback): undefined;
export type Callback = import('trough').Callback;
export type VFile = import('vfile').VFile;
export type Context = import('./index.js').Context;
//# sourceMappingURL=configure.d.ts.map