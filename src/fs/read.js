import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';


const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const FILE = __dirname + '/files/fileToRead.txt';
    try {
        let content = await fs.readFile(FILE, { encoding: 'utf8' });
        console.log(content);
    } catch {
        throw Error('FS operation failed');
    }
};

await read();