import process from 'node:process';

const parseArgs = () => {
    // Write your code here 
    for (let i = 2; i < process.argv.length; i++) {
        if (!/^--/.test(process.argv[i])) continue;
        console.log(`${process.argv[i].replace('--', '')} is ${process.argv[++i]}`);
    }
};

parseArgs();