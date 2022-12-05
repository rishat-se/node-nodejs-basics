import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';


const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const OLD_FILENAME = __dirname + '/files/wrongFilename.txt';
    const NEW_FILENAME = __dirname + '/files/properFilename.md';
    let isNewFileExists = true;
    //Check if FILE exists
    try {
        try {
            await fs.access(NEW_FILENAME, fs.constants.F_OK);
        } catch {
            isNewFileExists = false;
        }
        //throw Error if NewFile exists or rename file
        if (isNewFileExists) {
            throw Error('FS operation failed');
        } else {
            //rename or throw Error if failed
            try {
                await fs.rename(OLD_FILENAME, NEW_FILENAME);
            } catch {
                throw Error('FS operation failed');
            }
        }
    } catch (err) {
        //rethrow Error
        throw (err);
    }
};

await rename();