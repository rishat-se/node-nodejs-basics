import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';


const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const FILES_PATH = __dirname + '/files/';
    const FILES_COPY_PATH = __dirname + '/files-copy/';
    try {
        const files = await fs.readdir(FILES_PATH);
        await fs.mkdir(FILES_COPY_PATH);
        for (const fileName of files) {
            fs.copyFile(`${FILES_PATH}${fileName}`, `${FILES_COPY_PATH}${fileName}`, fs.constants.COPYFILE_EXCL);
        }
    } catch {
        throw Error('FS operation failed');
    }
};

copy();