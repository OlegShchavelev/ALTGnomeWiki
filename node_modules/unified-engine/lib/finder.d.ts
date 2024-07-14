/**
 * Search `input`, a mix of globs, paths, and files.
 *
 * @param {Array<VFile | string>} input
 *   Files, file paths, and globs.
 * @param {Options} options
 *   Configuration (required).
 * @param {FindCallback} callback
 *   Callback.
 * @returns {undefined}
 *   Nothing.
 */
export function finder(input: Array<VFile | string>, options: Options, callback: FindCallback): undefined;
export type Stats = import('node:fs').Stats;
export type IgnorePackageClass = import('ignore').Ignore;
export type Ignore = import('./ignore.js').Ignore;
/**
 * Callback called when a file is checked.
 */
export type CheckCallback = (error: NodeJS.ErrnoException | undefined, result?: CheckResult | undefined) => undefined;
/**
 * Check options.
 */
export type CheckOptions = CheckOptionsFields & Options;
/**
 * Extra options for `check`.
 */
export type CheckOptionsFields = {
    /**
     *   Extra ignore.
     */
    extraIgnore: IgnorePackageClass;
};
/**
 * Result.
 */
export type CheckResult = {
    /**
     *   Stats.
     */
    stats: Stats | undefined;
    /**
     *   Whether the file is ignored.
     */
    ignored: boolean | undefined;
};
/**
 * Callback called when files are expanded.
 */
export type ExpandCallback = (error: Error | undefined, result?: ExpandResult | undefined) => undefined;
/**
 * Results.
 */
export type ExpandResult = {
    /**
     *   Input.
     */
    input: Array<VFile | string>;
    /**
     *   Output.
     */
    output: Array<VFile>;
};
/**
 * Callback called when files are found.
 */
export type FindCallback = (error: Error | undefined, result?: FindResult | undefined) => undefined;
/**
 * Results.
 */
export type FindResult = {
    /**
     *   Whether we looked for an explicit single file only.
     */
    oneFileMode: boolean;
    /**
     *   Results.
     */
    files: Array<VFile>;
};
/**
 * Configuration.
 */
export type Options = {
    /**
     *   Base.
     */
    cwd: string;
    /**
     *   Extnames.
     */
    extensions: Array<string>;
    /**
     *   Whether to silently ignore errors.
     *
     *   The default is to throw if an explicitly given file is explicitly ignored.
     */
    silentlyIgnore: boolean | undefined;
    /**
     *   Extra ignore patterns.
     */
    ignorePatterns: Array<string>;
    /**
     *   Ignore.
     */
    ignore: Ignore;
};
/**
 * Callback called after searching.
 */
export type SearchCallback = (error: Error | undefined, result?: Array<VFile> | undefined) => undefined;
/**
 * Search options.
 */
export type SearchOptions = Options & SearchOptionsFields;
/**
 * Extra search fields.
 */
export type SearchOptionsFields = {
    /**
     * Whether this is a nested search.
     */
    nested?: boolean | undefined;
};
import { VFile } from 'vfile';
//# sourceMappingURL=finder.d.ts.map