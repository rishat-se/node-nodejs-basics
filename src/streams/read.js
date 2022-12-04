import process from 'node:process';
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const read = async () => {
    const INPUT_FILE = 'src/streams/files/fileToRead.txt';
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