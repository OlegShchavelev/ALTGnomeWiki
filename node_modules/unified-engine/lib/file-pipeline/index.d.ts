export const filePipeline: import("../../node_modules/trough/lib/index.js").Pipeline;
export type Pipeline = import('trough').Pipeline;
export type Processor = import('unified').Processor;
export type Node = import('unist').Node;
export type VFile = import('vfile').VFile;
export type VFileMessage = import('vfile-message').VFileMessage;
export type Configuration = import('../configuration.js').Configuration;
export type FileSet = import('../file-set.js').FileSet;
export type Settings = import('../index.js').Settings;
/**
 * Context.
 */
export type Context = {
    /**
     *   Configuration.
     */
    configuration: Configuration;
    /**
     *   File set.
     */
    fileSet: FileSet;
    /**
     *   Processor.
     */
    processor: Processor;
    /**
     *   Settings.
     */
    settings: Settings;
    /**
     * Tree.
     */
    tree?: Node | undefined;
};
/**
 * Callback.
 */
export type Next = () => undefined;
//# sourceMappingURL=index.d.ts.map