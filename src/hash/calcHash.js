import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { join } from 'path';

const calculateHash = async () => {
    const filePath = join(process.cwd(), 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    
    return new Promise((resolve, reject) => {
        const stream = createReadStream(filePath);
        
        stream.on('data', (chunk) => {
            hash.update(chunk);
        });
        
        stream.on('end', () => {
            const hexHash = hash.digest('hex');
            console.log(hexHash);
            resolve(hexHash);
        });
        
        stream.on('error', reject);
    });
};

await calculateHash();