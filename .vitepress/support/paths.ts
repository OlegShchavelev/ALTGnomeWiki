import * as fs from 'fs'
import path from 'path'

const paths = [
  'apps',
  'build',
  'developers',
  'distributions',
  'equipment',
  'extensions',
  'games',
  'main',
  'system',
  'tips',
  'using_gnome'
]
const prefix = 'docs/'

function getFilesWithMdExtension(paths) {
  const filesWithMdExtension = {}
  const filesmd = []
  for (const path of paths) {
    const files = fs.readdirSync(prefix + path)
    for (const file of files) {
      filesWithMdExtension[path + '/' + file] = file
    }
  }
  return filesWithMdExtension
}

export const rewrites: Record<string, string> = getFilesWithMdExtension(paths)
