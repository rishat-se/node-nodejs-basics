import * as fs from 'node:fs/promises';

const rename = async () => {
    // Write your code here
    const OLD_FILENAME = 'src/fs/files/wrongFilename.txt';
    const NEW_FILENAME = 'src/fs/files/properFilename.md';
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