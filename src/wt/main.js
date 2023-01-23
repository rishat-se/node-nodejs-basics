import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const START_VALUE = 10;
    const WORKER_SCRIPT = __dirname + '/worker.js';
    const numOfCPUs = cpus().length;
    const workersPromises = Array(numOfCPUs);
    for (let i = 0; i < numOfCPUs; i++) {
        workersPromises[i] = new Promise((resolve) => {
            const worker = new Worker(WORKER_SCRIPT, { workerData: START_VALUE + i });
            worker.on('message', msg => resolve({ status: 'resolved', data: msg }));
            worker.on('error', () => resolve({ status: 'error', data: null }));
        })
    }
    console.log(await Promise.all(workersPromises));
};

await performCalculations();