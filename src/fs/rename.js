import { rename } from 'fs/promises';
import { join } from 'path';

const rename = async () => {
    const oldPath = join(process.cwd(), 'wrongFilename.txt');
    const newPath = join(process.cwd(), 'properFilename.md');
    
    try {
        await rename(oldPath, newPath);
    } catch (error) {
        if(error.code==="EEXISTS"){
            throw new Error('FS operation failed');
        }
    }
};

await rename();