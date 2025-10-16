export interface Locale extends Record<string, any> {
  meta?: {
    badges?: {
      core: string
      circle: string
      adaptive: string
      proprietary: string
      restrictions: string
      oobe: string
      donttheme: string
    }
    developer: {
      caption: string
    }
    lists: {
      homepage: string
      bugtracker: string
    }
  }
  teams?: {
    loading: string
    error: string
    empty: string
  }
}
