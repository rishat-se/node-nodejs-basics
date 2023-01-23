import process from 'node:process';
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const INPUT_FILE = __dirname + '/files/fileToRead.txt';
    try {
        const readStream = createReadStream(INPUT_FILE);
        await pipeline(
            readStream,
            process.stdout
        );
    } catch (err) {
        console.error(err.message);
    }
};

await read();