import * as fs from 'node:fs/promises';

const remove = async () => {
    // Write your code here 
    const FILE = 'src/fs/files/fileToRemove.txt';
    try {
        await fs.rm(FILE);
    } catch {
        throw Error('FS operation failed');
    }
};

await remove();