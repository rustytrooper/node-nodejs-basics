import { readdir } from 'fs/promises';
import { join } from 'path';

const list = async () => {
    const dirPath = join(process.cwd(), 'files');
    
    try {
        const files = await readdir(dirPath);
        console.log(files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();