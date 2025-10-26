import { cp } from 'fs/promises';
import { join } from 'path';

const copy = async () => {
    const sourceDir = join(process.cwd(), 'files');
    const targetDir = join(process.cwd(), 'files_copy');
    
    try {
        await cp(sourceDir, targetDir, { recursive: true, force: false, errorOnExist: true });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
