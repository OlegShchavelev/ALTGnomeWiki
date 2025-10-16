export const getDomainName = (url: any) => url.match(/\/\/([^/]+)\//)[1].replace('www.', '')

export const getHostname = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./i, '')
  } catch {
    console.warn(`Invalid URL: ${url}`)
    return url
  }
}
