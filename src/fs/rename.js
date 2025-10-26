import { rename as Rename}  from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = join(__dirname, 'files', 'properFilename.md');
    try {
        await Rename(oldPath, newPath);
    } catch (error) {
        if(error.code==="EEXISTS"){
            throw new Error('FS operation failed');
        }
    }
};

await rename();