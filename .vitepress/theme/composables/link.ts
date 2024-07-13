export const getDomainName = (url: any) => url.match(/\/\/([^/]+)\//)[1].replace('www.', '')
