export { lintRule } from "./lib/index.js";
export type Node = import('unist').Node;
export type Label = import('./lib/index.js').Label;
export type Meta = import('./lib/index.js').Meta;
export type Severity = import('./lib/index.js').Severity;
export type Rule<Tree extends import("unist").Node = import("unist").Node, Options extends unknown = unknown> = import('./lib/index.js').Rule<Tree, Options>;
//# sourceMappingURL=index.d.ts.map