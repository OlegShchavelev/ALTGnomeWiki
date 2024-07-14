/**
 * Inspect a node, without color.
 *
 * @param {unknown} tree
 *   Tree to inspect.
 * @param {Options | null | undefined} [options]
 *   Configuration.
 * @returns {string}
 *   Pretty printed `tree`.
 */
export function inspectNoColor(
  tree: unknown,
  options?: Options | null | undefined
): string
/**
 * Inspects a node, using color.
 *
 * @param {unknown} tree
 *   Tree to inspect.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {string}
 *   Pretty printed `tree`.
 */
export function inspectColor(
  tree: unknown,
  options?: Options | null | undefined
): string
/**
 * Inspects a node, using color.
 *
 * @param {unknown} tree
 *   Tree to inspect.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {string}
 *   Pretty printed `tree`.
 */
export function inspect(
  tree: unknown,
  options?: Options | null | undefined
): string
export type Node = import('unist').Node
/**
 * Configuration.
 */
export type Options = {
  /**
   * Whether to include positional information (default: `true`).
   */
  showPositions?: boolean | null | undefined
}
/**
 * Info passed around.
 */
export type State = {
  /**
   *   Whether to include positional information.
   */
  showPositions: boolean
}
