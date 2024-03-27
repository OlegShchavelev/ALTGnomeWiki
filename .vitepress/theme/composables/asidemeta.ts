export const getLists = (data: any | ArrayLike<unknown>, labels: any) => {

    const _data = {}

    Object.entries(data).forEach(([key, value]) => {
        _data[key] = typeof value !== 'string' ? Object.assign({}, { label: labels[key] }, value) : { label: labels[key], link: value }
    })

    return _data
}

export const getLinks = (data: any, config: any) => {

    const _data = {}

    Object.entries(data).forEach(([key, value]) => {
        _data[key] = Object.assign({}, { id: value }, config[key])
    })

    return _data
}