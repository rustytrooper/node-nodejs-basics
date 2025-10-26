import { cp } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const copy = async () => {
    const sourceDir = join(__dirname, 'files');
    const targetDir = join(__dirname, 'files_copy');
    
    try {
        await cp(sourceDir, targetDir, { recursive: true, force: false, errorOnExist: true });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
