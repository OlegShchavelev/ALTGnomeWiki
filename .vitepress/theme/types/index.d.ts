import { type DefaultTheme } from 'vitepress'

interface Meta {
  keywords?: MetaKeyword
  actions?: MetaAction
}

type MetaKeyword = Record<MetaKeywordKey, MetaKeywordType>
type MetaAction = Record<MetaActionKey, MetaActions>

export type MetaKeywordKey =
  | 'core'
  | 'circle'
  | 'adaptive'
  | 'proprietary'
  | 'restrictions'
  | 'oobe'
  | 'dontthemes'

export type MetaKeywordType = 'info' | 'success' | 'tip' | 'danger' | 'warning' | 'success-1'

export type MetaActionKey = 'sisyphus' | 'flatpak' | 'snap' | 'more'
export type MetaActions = {
  theme: MetaActionsTheme
  target: string
  baseUrl?: string
}

export type MetaActionsTheme = 'sisyphus' | 'flatpak' | 'snap' | 'more'

export type MetaDeveloper = {
  avatar: string
  name: string
  nickname: string
}

export namespace AGWTheme {
  export interface AppRows {
    name: string
    thumb?: string
    summary?: string
  }

  export interface MetaLists {
    caption: string
    link: string
  }

  export interface MetaKeywords {
    name: MetaKeyword[]
    type: MetaAction[]
  }
}
