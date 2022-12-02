import * as fs from 'node:fs/promises';

const list = async () => {
    // Write your code here
    const FOLDER = 'src/fs/files/';
    try {
        const files = await fs.readdir(FOLDER);
        for (const fileName of files) console.log(fileName);
    } catch {
        throw Error('FS operation failed');
    }
}

await list();