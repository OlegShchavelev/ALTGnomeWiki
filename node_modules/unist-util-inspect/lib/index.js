/**
 * @typedef {import('unist').Node} Node
 */

/**
 * @typedef Options
 *   Configuration.
 * @property {boolean | null | undefined} [showPositions=true]
 *   Whether to include positional information (default: `true`).
 *
 * @typedef State
 *   Info passed around.
 * @property {boolean} showPositions
 *   Whether to include positional information.
 */

import {color} from 'unist-util-inspect/do-not-use-conditional-color'

/**
 * Inspect a node, with color in Node, without color in browsers.
 *
 * @param tree
 *   Tree to inspect.
 * @param options
 *   Configuration (optional).
 * @returns
 *   Pretty printed `tree`.
 */
/* c8 ignore next */
export const inspect = color ? inspectColor : inspectNoColor

const own = {}.hasOwnProperty

const bold = ansiColor(1, 22)
const dim = ansiColor(2, 22)
const yellow = ansiColor(33, 39)
const green = ansiColor(32, 39)

// ANSI color regex.
/* eslint-disable no-control-regex */
const colorExpression =
  /(?:(?:\u001B\[)|\u009B)(?:\d{1,3})?(?:(?:;\d{0,3})*)?[A-M|f-m]|\u001B[A-M]/g
/* eslint-enable no-control-regex */

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
export function inspectNoColor(tree, options) {
  return inspectColor(tree, options).replace(colorExpression, '')
}

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
export function inspectColor(tree, options) {
  /** @type {State} */
  const state = {
    showPositions:
      !options ||
      options.showPositions === null ||
      options.showPositions === undefined
        ? true
        : options.showPositions
  }

  return inspectValue(tree, state)
}

/**
 * Format any value.
 *
 * @param {unknown} node
 *   Thing to format.
 * @param {State} state
 *   Info passed around.
 * @returns {string}
 *   Formatted thing.
 */
function inspectValue(node, state) {
  if (isArrayUnknown(node)) {
    return inspectNodes(node, state)
  }

  if (isNode(node)) {
    return inspectTree(node, state)
  }

  return inspectNonTree(node)
}

/**
 * Format an unknown value.
 *
 * @param {unknown} value
 *   Thing to format.
 * @returns {string}
 *   Formatted thing.
 */
function inspectNonTree(value) {
  return JSON.stringify(value)
}

/**
 * Format a list of nodes.
 *
 * @param {Array<unknown>} nodes
 *   Nodes to format.
 * @param {State} state
 *   Info passed around.
 * @returns {string}
 *   Formatted nodes.
 */
function inspectNodes(nodes, state) {
  const size = String(nodes.length - 1).length
  /** @type {Array<string>} */
  const result = []
  let index = -1

  while (++index < nodes.length) {
    result.push(
      dim(
        (index < nodes.length - 1 ? '├' : '└') +
          '─' +
          String(index).padEnd(size)
      ) +
        ' ' +
        indent(
          inspectValue(nodes[index], state),
          (index < nodes.length - 1 ? dim('│') : ' ') + ' '.repeat(size + 2),
          true
        )
    )
  }

  return result.join('\n')
}

/**
 * Format the fields in a node.
 *
 * @param {Record<string, unknown>} object
 *   Node to format.
 * @param {State} state
 *   Info passed around.
 * @returns {string}
 *   Formatted node.
 */
// eslint-disable-next-line complexity
function inspectFields(object, state) {
  /** @type {Array<string>} */
  const result = []
  /** @type {string} */
  let key

  for (key in object) {
    /* c8 ignore next 1 */
    if (!own.call(object, key)) continue

    const value = object[key]
    /** @type {string} */
    let formatted

    if (
      value === undefined ||
      // Standard keys defined by unist that we format differently.
      // <https://github.com/syntax-tree/unist>
      key === 'type' ||
      key === 'value' ||
      key === 'children' ||
      key === 'position' ||
      // Ignore `name` (from xast) and `tagName` (from `hast`) when string.
      (typeof value === 'string' && (key === 'name' || key === 'tagName'))
    ) {
      continue
    }

    // A single node.
    if (
      isNode(value) &&
      key !== 'data' &&
      key !== 'attributes' &&
      key !== 'properties'
    ) {
      formatted = inspectTree(value, state)
    }
    // A list of nodes.
    else if (value && isArrayUnknown(value) && isNode(value[0])) {
      formatted = '\n' + inspectNodes(value, state)
    } else {
      formatted = inspectNonTree(value)
    }

    result.push(
      key + dim(':') + (/\s/.test(formatted.charAt(0)) ? '' : ' ') + formatted
    )
  }

  return indent(
    result.join('\n'),
    (isArrayUnknown(object.children) && object.children.length > 0
      ? dim('│')
      : ' ') + ' '
  )
}

/**
 * Format a node, its fields, and its children.
 *
 * @param {Node} node
 *   Node to format.
 * @param {State} state
 *   Info passed around.
 * @returns {string}
 *   Formatted node.
 */
function inspectTree(node, state) {
  const result = [formatNode(node, state)]
  // Cast as record to allow indexing.
  const map = /** @type {Record<string, unknown>} */ (
    /** @type {unknown} */ (node)
  )
  const fields = inspectFields(map, state)
  const content = isArrayUnknown(map.children)
    ? inspectNodes(map.children, state)
    : ''
  if (fields) result.push(fields)
  if (content) result.push(content)
  return result.join('\n')
}

/**
 * Format a node itself.
 *
 * @param {Node} node
 *   Node to format.
 * @param {State} state
 *   Info passed around.
 * @returns {string}
 *   Formatted node.
 */
function formatNode(node, state) {
  const result = [bold(node.type)]
  // Cast as record to allow indexing.
  const map = /** @type {Record<string, unknown>} */ (
    /** @type {unknown} */ (node)
  )
  const kind = map.tagName || map.name
  const position = state.showPositions ? stringifyPosition(node.position) : ''

  if (typeof kind === 'string') {
    result.push('<', kind, '>')
  }

  if (isArrayUnknown(map.children)) {
    result.push(dim('['), yellow(String(map.children.length)), dim(']'))
  } else if (typeof map.value === 'string') {
    result.push(' ', green(inspectNonTree(map.value)))
  }

  if (position) {
    result.push(' ', dim('('), position, dim(')'))
  }

  return result.join('')
}

/**
 * Indent a value.
 *
 * @param {string} value
 *   Value to indent.
 * @param {string} indentation
 *   Indent to use.
 * @param {boolean | undefined} [ignoreFirst=false]
 *   Whether to ignore indenting the first line (default: `false`).
 * @returns {string}
 *   Indented `value`.
 */
function indent(value, indentation, ignoreFirst) {
  if (!value) return value

  const lines = value.split('\n')
  let index = ignoreFirst ? 0 : -1

  while (++index < lines.length) {
    lines[index] = indentation + lines[index]
  }

  return lines.join('\n')
}

/**
 * Serialize a position.
 *
 * @param {unknown} [value]
 *   Position to serialize.
 * @returns {string}
 *   Serialized position.
 */
function stringifyPosition(value) {
  /** @type {Array<string>} */
  const result = []
  /** @type {Array<string>} */
  const positions = []
  /** @type {Array<string>} */
  const offsets = []

  if (value && typeof value === 'object') {
    point('start' in value ? value.start : undefined)
    point('end' in value ? value.end : undefined)
  }

  if (positions.length > 0) result.push(positions.join('-'))
  if (offsets.length > 0) result.push(offsets.join('-'))

  return result.join(', ')

  /**
   * Add a point.
   *
   * @param {unknown} value
   *   Point to add.
   */
  function point(value) {
    if (value && typeof value === 'object') {
      const line =
        'line' in value && typeof value.line === 'number' ? value.line : 1
      const column =
        'column' in value && typeof value.column === 'number' ? value.column : 1

      positions.push(line + ':' + column)

      if ('offset' in value && typeof value.offset === 'number') {
        offsets.push(String(value.offset || 0))
      }
    }
  }
}

/**
 * Factory to wrap values in ANSI colours.
 *
 * @param {number} open
 *   Opening color code.
 * @param {number} close
 *   Closing color code.
 * @returns {(value: string) => string}
 *   Color `value`.
 */
function ansiColor(open, close) {
  return color

  /**
   * Color `value`.
   *
   * @param {string} value
   *   Value to color.
   * @returns {string}
   *   Colored `value`.
   */
  function color(value) {
    return '\u001B[' + open + 'm' + value + '\u001B[' + close + 'm'
  }
}

/**
 * @param {unknown} value
 * @returns {value is Node}
 */
function isNode(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      'type' in value &&
      typeof value.type === 'string'
  )
}

/**
 * @param {unknown} node
 * @returns {node is Array<unknown>}
 */
function isArrayUnknown(node) {
  return Array.isArray(node)
}
