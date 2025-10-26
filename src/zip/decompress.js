import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
   const sourcePath = join(__dirname, 'files', 'archive.gz');
    const targetPath = join(__dirname, 'files', 'fileToCompress1.txt');
    
    const gunzip = createGunzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(targetPath);
    
    await pipeline(source, gunzip, destination);
};

await decompress();