export interface Locale extends Record<string, any> {
  meta?: {
    badges?: {
      core: string
      circle: string
      adaptive: string
      proprietary: string
      restrictions: string
      oobe: string
      dontthemes: string
    }
    developer: {
      caption: string
    }
    lists: {
      homepage: string
      bugtracker: string
    }
  }
}
