import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';


const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const FILE = __dirname + '/files/fileToRemove.txt';
    try {
        await fs.rm(FILE);
    } catch {
        throw Error('FS operation failed');
    }
};

await remove();