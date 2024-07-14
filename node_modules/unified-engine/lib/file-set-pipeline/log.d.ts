/**
 * @typedef Context
 *   Context.
 * @property {Array<VFile>} files
 *   Files.
 * @property {Configuration | undefined} [configuration]
 *   Configuration.
 */
/**
 * @param {Context} context
 *   Context.
 * @param {Settings} settings
 *   Settings.
 * @returns {Promise<undefined>}
 *   Nothing.
 */
export function log(context: Context, settings: Settings): Promise<undefined>;
/**
 * Context.
 */
export type Context = {
    /**
     *   Files.
     */
    files: Array<VFile>;
    /**
     * Configuration.
     */
    configuration?: Configuration | undefined;
};
export type VFile = import('vfile').VFile;
export type Configuration = import('../configuration.js').Configuration;
export type Settings = import('../index.js').Settings;
export type VFileReporter = import('../index.js').VFileReporter;
//# sourceMappingURL=log.d.ts.map