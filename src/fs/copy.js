import * as fs from 'node:fs/promises';

const copy = async () => {
    // Write your code here
    const FILES_PATH = 'src/fs/files/';
    const FILES_COPY_PATH = 'src/fs/files-copy/';
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