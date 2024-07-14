export type Options = typeof import('./lib/index.js')
/**
 * Deprecated, use `Options`.
 */
export type InspectOptions = Options
export {inspect, inspectColor, inspectNoColor} from './lib/index.js'
