export const HASH_RE = /#.*$/
export const EXT_RE = /(index)?\.(md|html)$/

export const normalize = (path: string): string => decodeURI(path).replace(HASH_RE, '').replace(EXT_RE, '');