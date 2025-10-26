import { writeFile } from 'fs/promises';
import { join } from 'path';

const create = async () => {
     const filePath = join(process.cwd(), 'files', 'fresh.txt');
    
    try {
        await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
    } catch (error) {
        if (error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        throw error;
    }
};

await create();