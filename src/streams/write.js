import process from 'node:process';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const OUTPUT_FILE = __dirname + '/files/fileToWrite.txt';
    try {
        const writeStream = createWriteStream(OUTPUT_FILE);
        await pipeline(
            process.stdin,
            writeStream
        )
    } catch (err) {
        console.error(err.message);
    }
};

await write();