/**
 * @param {Context} context
 *   Context.
 * @param {Settings} settings
 *   Settings.
 * @param {Callback} next
 *   Callback.
 * @returns {undefined}
 *   Nothing.
 */
export function stdin(context: Context, settings: Settings, next: Callback): undefined;
export type Callback = import('trough').Callback;
export type Settings = import('../index.js').Settings;
/**
 * Context.
 */
export type Context = {
    /**
     *   Files.
     */
    files: Array<VFile | string>;
};
import { VFile } from 'vfile';
//# sourceMappingURL=stdin.d.ts.map