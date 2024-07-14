/**
 * Queue all files which came this far.
 * When the last file gets here, run the file-set pipeline and flush the queue.
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
export function queue(context: Context, file: VFile, next: Callback): undefined;
export type Callback = import('trough').Callback;
export type VFile = import('vfile').VFile;
export type Context = import('./index.js').Context;
//# sourceMappingURL=queue.d.ts.map