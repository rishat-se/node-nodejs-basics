import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createHash } from 'node:crypto';
import { Transform } from 'node:stream';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const INPUT_FILE = __dirname + '/files/fileToCalculateHashFor.txt';
    try {
        const readStream = createReadStream(INPUT_FILE);
        const hash = createHash('sha256');
        const toHex = new Transform({
            transform(chunk, encoding, callback) {
                this.push(chunk.toString('hex'));
                callback();
            }
        })
        await pipeline(
            readStream,
            hash,
            toHex,
            process.stdout
        )
    } catch (err) {
        console.error(err.message);
    }
};

await calculateHash();