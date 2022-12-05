import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createUnzip } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';


const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const INPUT_FILE = __dirname + '/files/archive.gz';
    const OUTPUT_FILE = __dirname + '/files/fileToCompress.txt';
    try {
        const readStream = createReadStream(INPUT_FILE);
        const writeStream = createWriteStream(OUTPUT_FILE);
        const unzip = createUnzip();
        await pipeline(
            readStream,
            unzip,
            writeStream
        );
    } catch (err) {
        console.log(err.message);
    }
};

await decompress();