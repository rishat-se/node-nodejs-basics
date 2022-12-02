import * as fs from 'node:fs/promises';

const read = async () => {
    // Write your code here
    const FILE = 'src/fs/files/fileToRead.txt';
    try {
        let content = await fs.readFile(FILE, { encoding: 'utf8' });
        console.log(content);
    } catch {
        throw Error('FS operation failed');
    }
};

await read();