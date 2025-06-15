export const transformKeywords = (dataKeywords, configKeywords) => {
  const types = configKeywords

  return dataKeywords?.map((keyword: string) => ({
    name: keyword,
    type: types?.[keyword] ?? 'tip'
  }))
}

export const transformActions = (dataActions, configActions) =>
  Object.entries(dataActions ?? {})
    .filter(([key]) => configActions?.[key])
    .map(([key, value]) => {
      const baseValue =
        typeof value === 'object' && value !== null
          ? value
          : { id: typeof value === 'string' ? value : undefined }

      const { id = key, ...extraProps } = baseValue as { id?: string }

      return {
        id,
        text: key,
        ...(configActions[key] ?? {}),
        ...extraProps
      }
    })
