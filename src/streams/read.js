import { createReadStream } from 'fs';
import { join } from 'path';

const read = async () => {
    const filePath = join(process.cwd(), 'fileToRead.txt');
    const readStream = createReadStream(filePath, 'utf8');
    
    readStream.pipe(process.stdout); 
};

await read();