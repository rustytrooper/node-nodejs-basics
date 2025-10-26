import { readFile } from 'fs/promises';
import { join } from 'path';

const read = async () => {
    const filePath = join(process.cwd(), 'fileToRead.txt');
    
    try {
        const content = await readFile(filePath, 'utf8');
        console.log(content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();