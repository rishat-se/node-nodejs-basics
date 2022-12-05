import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const INPUT_FILE = __dirname + '/files/fileToCompress.txt';
    const OUTPUT_FILE = __dirname + '/files/archive.gz';
    try {
        const readStream = createReadStream(INPUT_FILE);
        const writeStream = createWriteStream(OUTPUT_FILE);
        const gzip = createGzip();
        await pipeline(
            readStream,
            gzip,
            writeStream
        )
    } catch (err) {
        console.error(err.message);
    }
};

await compress();