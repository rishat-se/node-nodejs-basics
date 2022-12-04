import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createHash } from 'node:crypto';
import { Transform } from 'node:stream';


const calculateHash = async () => {
    // Write your code here
    const FILE = 'src/hash/files/fileToCalculateHashFor.txt';
    try {
        const readStream = createReadStream(FILE);
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