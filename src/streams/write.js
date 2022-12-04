import process from 'node:process';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const write = async () => {
    const OUTPUT_FILE = 'src/streams/files/fileToWrite.txt';
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