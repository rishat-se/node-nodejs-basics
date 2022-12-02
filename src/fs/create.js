import * as fs from 'node:fs/promises';

const create = async () => {
    // Write your code here
    const FILE = 'src/fs/files/fresh.txt';
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