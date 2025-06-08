export const getDomainName = (url: any) => url.match(/\/\/([^/]+)\//)[1].replace('www.', '')

export const extractDomain = (url: string) => {
  return new URL(url).hostname
}
