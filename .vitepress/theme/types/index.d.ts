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
  | 'donttheme'

export type MetaKeywordType = 'info' | 'success' | 'tip' | 'danger' | 'warning' | 'success-1'

export type MetaActionKey = 'sisyphus' | 'flatpak' | 'snap' | 'more'
export type MetaActions = {
  theme: MetaActionsTheme
  target: string
  baseUrl?: string
}

export type MetaActionsTheme = 'sisyphus' | 'flatpak' | 'snap' | 'more'
export type Collaborator = 'knowledge' | 'maintainer'

export type MetaDeveloper = {
  avatar: string
  name: string
  nickname: string
}

export interface Footer extends DefaultTheme.Footer {
  docFooter?: {
    message: string
  }
  licence?: {
    content: {
      name: string
      link: string
    }
  }
}

export namespace AGWTheme {
  export interface Config extends DefaultTheme.Config {
    meta?: Meta
    footer?: Footer
  }

  export interface AppRows {
    name: string
    icon?: string
    summary?: string
    keywords: MetaKeywords[]
    actions?: MetaAction[]
  }

  export interface MetaLists {
    caption: string
    link: any
    text?: any
  }

  export interface MetaKeywords {
    name: MetaKeyword[]
    type: MetaAction[]
  }
}

export interface Distribution {
  name: string
  branch: string
  description: string
  note?: string
  architectures: Architecture[]
}

export interface Architecture {
  arch: string
  branches: Branch[]
}

export interface Branch {
  name: string
  recommended?: boolean
  images: Image[]
}

export interface Image {
  urls: string[]
  badges: Badge[]
}

export interface Badge {
  type: 'info' | 'tip' | 'warning' | 'danger'
  text: string
}
