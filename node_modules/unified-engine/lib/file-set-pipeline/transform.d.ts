/**
 * Transform all files.
 *
 * @param {Context} context
 *   Context.
 * @param {Settings} settings
 *   Settings.
 * @param {Callback} next
 *   Callback.
 * @returns {undefined}
 *   Nothing.
 */
export function transform(context: Context, settings: Settings, next: Callback): undefined;
export type Callback = import('trough').Callback;
export type VFile = import('vfile').VFile;
export type Configuration = import('../configuration.js').Configuration;
export type Settings = import('../index.js').Settings;
/**
 * Context.
 */
export type Context = {
    /**
     *   Files.
     */
    files: Array<VFile>;
    /**
     *   Configuration.
     */
    configuration: Configuration;
    /**
     *   File set.
     */
    fileSet: FileSet;
};
import { FileSet } from '../file-set.js';
//# sourceMappingURL=transform.d.ts.map