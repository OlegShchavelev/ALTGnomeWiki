export const getLists = (data: any | ArrayLike<unknown>, labels: any) => {

    const _data = {}

    Object.entries(data).forEach(([key, value]) => {
        (value && key !== 'donation') ?
            _data[key] = typeof value !== 'string' ? Object.assign({}, { label: labels[key] }, value) : { label: labels[key], link: value }
            : {}
    })

    return _data
}

export const getLinks = (data: any, config: {}) => {

    const _data = {}

    Object.entries(data).forEach(([key, value]) => {
        (value && config[key]) ?
            _data[key] = Object.assign({}, { id: value }, config[key])
            : {}
    })

    return _data
}

export const getKeywords = (data: any, config: {}) => {

    const _data = {}

    if(!data) return

    Object.values(data).forEach((value: string) => {
        (value && config[value]) ?
            _data[value] = config[value]
            : {}
    })

    return _data

}

export const getLicence = (licence: any) => {

    return (licence?.name && licence?.link) ? {
        metadata_license: {
            name: licence.name,
            link: licence.link
        }
    } : {}
}

export const getDonation = (donation: any) => {

    return (donation?.link) ? {
        donation: donation
    } : {
        link: donation
    }
}