import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';


const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const FOLDER = __dirname + '/files/';
    try {
        const files = await fs.readdir(FOLDER);
        console.log(files);
    } catch {
        throw Error('FS operation failed');
    }
}

await list();