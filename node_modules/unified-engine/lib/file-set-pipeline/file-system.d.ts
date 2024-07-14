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
export function fileSystem(context: Context, settings: Settings, next: Callback): undefined;
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
    files: Array<VFile | string>;
    /**
     * Configuration.
     */
    configuration?: Configuration | undefined;
};
//# sourceMappingURL=file-system.d.ts.map