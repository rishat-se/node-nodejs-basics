import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';


const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const FILE = __dirname + '/files/fresh.txt';
    let isFileExists = true;
    try {
        //Check if FILE exists
        try {
            await fs.access(FILE, fs.constants.F_OK);
        } catch {
            isFileExists = false;
        }
        //throw Error or create file
        if (isFileExists) {
            throw Error('FS operation failed');
        } else {
            await fs.writeFile(FILE, 'I am fresh and young');
        }
    } catch (err) {
        //rethrow Error
        throw (err);
    }
};

await create();