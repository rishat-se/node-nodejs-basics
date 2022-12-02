import process from 'node:process';

const parseEnv = () => {
    // Write your code here
    for (let key in process.env) {
        if (/^RSS_/.test(key)) console.log(`${key}=${process.env[key]};`);
    }

};

parseEnv();