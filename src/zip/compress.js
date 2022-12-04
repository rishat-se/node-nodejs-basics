import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const INPUT_FILE = 'src/zip/files/fileToCompress.txt';
    const OUTPUT_FILE = 'src/zip/files/archive.gz';
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