import { type DefaultTheme } from 'vitepress'

// ========================================
// Meta Types
// ========================================

export type MetaKeywordKey =
  | 'core'
  | 'circle'
  | 'adaptive'
  | 'proprietary'
  | 'restrictions'
  | 'oobe'
  | 'donttheme'

export type MetaKeywordType = 'info' | 'success' | 'tip' | 'danger' | 'warning' | 'success-1'

export type MetaActionKey = 'sisyphus' | 'flatpak' | 'snap' | 'extension' | 'more'

export type MetaActionsTheme = 'sisyphus' | 'flatpak' | 'snap' | 'extension' | 'more'

export type MetaKeyword = Record<MetaKeywordKey, MetaKeywordType>

export type MetaActions = {
  theme: MetaActionsTheme
  target: string
  baseUrl?: string
}

export type MetaAction = Record<MetaActionKey, MetaActions>

export interface MetaKeywords {
  name: string
  type: MetaKeywordType
}

export interface MetaActionItem {
  id: string
  text: string
  target: string
  theme: MetaActionsTheme
  baseUrl?: string
}

export interface MetaLists {
  caption: string
  link: string
  text?: string
}

export interface MetaDeveloper {
  avatar?: string
  name: string
  nickname?: string
}

interface Meta {
  keywords?: MetaKeyword
  actions?: MetaAction
}

export type LinkObj = { name?: string; link: string }

// ========================================
// Team Types
// ========================================

export type Collaborator = 'knowledge' | 'maintainer'

export interface Member {
  title: string
  lead?: string
  tids?: string[] | null
  layout?: 'home' | 'doc'
  moreLink?: string
  moreText?: string
  limit?: number
  homeLimit?: number
  name: string | object
  size?: 'small' | 'medium'
  collaborator: Collaborator
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

// ========================================
// Theme Config
// ========================================

export namespace AGWTheme {
  export interface Config extends DefaultTheme.Config {
    meta?: Meta
    footer?: Footer
    gallery?: AGWGallery.Config
  }

  export interface TeamMember extends DefaultTheme.TeamMember {
    collaborator: Collaborator
  }

  export interface AppRows {
    name: string
    icon?: string
    summary?: string
    keywords?: MetaKeywords[]
    actions?: MetaActionItem[]
  }
}

// ========================================
// Distribution Types
// ========================================

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

// ========================================
// Gallery Types
// ========================================

export namespace AGWGallery {
  export interface Image {
    src: string
    alt?: string
    caption?: string
  }

  export interface Config {
    title?: string
    type?: 'grid' | 'carousel' | 'slider'
    images?: Image[]
    gridColumns?: number
    showCaptions?: boolean
  }
}
