import * as fs from 'fs';

const paths = ['apps', 'system', 'main', 'tips', 'developers', 'equipment', 'gnome']
const prefix = 'docs/'

function getFilesWithMdExtension(paths) {
    const filesWithMdExtension = {};
    for (const path of paths) {
        const files = fs.readdirSync(prefix + path);
        for (const file of files) {
            filesWithMdExtension[path + '/' + file] = path + '/' + file;
        }
    }
    return filesWithMdExtension
}

export const rewrites: Record<string, string> = getFilesWithMdExtension(paths);