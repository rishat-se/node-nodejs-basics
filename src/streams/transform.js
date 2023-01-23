import process from 'node:process';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';


const transform = async () => {
    try {
        const transform = new Transform({
            transform(chunk, encoding, callback) {
                const str = chunk.toString().trim();
                this.push(`${str.split('').reverse().join('')}\n`);
                callback();
            }
        });
        await pipeline(
            process.stdin,
            transform,
            process.stdout
        );
    } catch (err) {
        console.error(err.message);
    }
};

await transform();