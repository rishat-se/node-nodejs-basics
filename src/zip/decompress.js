import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createUnzip } from 'node:zlib';


const decompress = async () => {
    const INPUT_FILE = 'src/zip/files/archive.gz';
    const OUTPUT_FILE = 'src/zip/files/fileToCompress.txt';
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