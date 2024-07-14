/**
 * @template {Node} [Tree=Node]
 *   Node kind.
 * @template {any} [Option=unknown]
 *   Parameter kind.
 * @param {Meta | string} meta
 *   Info.
 * @param {Rule<Tree, Option>} rule
 *   Rule.
 * @returns
 *   Plugin.
 */
export function lintRule<Tree extends import("unist").Node = import("unist").Node, Option extends unknown = unknown>(meta: Meta | string, rule: Rule<Tree, Option>): {
    (config?: Label | Severity | Option | [level: Label | Severity, option?: Option] | undefined): ((tree: Tree, file: VFile, next: import("unified").TransformCallback<Tree>) => undefined) | undefined;
    readonly name: string;
};
export type Node = import('unist').Node;
export type VFile = import('vfile').VFile;
/**
 * Severity label;
 * `'off'`: `0`, `'on'` and `warn`: `1`, `'error'`: `2`.
 */
export type Label = 'error' | 'on' | 'off' | 'warn';
/**
 * Rule metadata.
 */
export type Meta = {
    /**
     *   Name of the lint rule.
     */
    origin: string;
    /**
     * Link to documentation (optional).
     */
    url?: string | null | undefined;
};
/**
 * Severity number;
 * `0`: `'off'`, `1`: `'on'` and `warn`, `2`: `'error'`.
 */
export type Severity = 0 | 1 | 2;
/**
 * Parsed severty and options.
 */
export type SeverityTuple = [severity: Severity, ...parameters: Array<unknown>];
/**
 * Rule.
 */
export type Rule<Tree extends import("unist").Node = import("unist").Node, Option extends unknown = unknown> = (tree: Tree, file: VFile, option: Option) => Promise<undefined | void> | undefined | void;
//# sourceMappingURL=index.d.ts.map