import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const SCRIPT = __dirname + '/files/script.js';
    const child = fork(SCRIPT, args);
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);