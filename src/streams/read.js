import { createReadStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const filePath = join(__dirname, 'files', 'fileToRead.txt');
    const readStream = createReadStream(filePath, 'utf8');
    
    return new Promise((resolve, reject) => {
        readStream.on('data', (chunk) => {
            process.stdout.write(chunk);
        });
        
        readStream.on('end', () => {
            process.stdout.write('\n'); 
            resolve();
        });
        
        readStream.on('error', reject);
    });
};

await read();