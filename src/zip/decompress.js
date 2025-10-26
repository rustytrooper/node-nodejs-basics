import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { join } from 'path';
import { pipeline } from 'stream/promises';

const decompress = async () => {
   const sourcePath = join(process.cwd(), 'archive.gz');
    const targetPath = join(process.cwd(), 'fileToCompress.txt');
    
    const gunzip = createGunzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(targetPath);
    
    await pipeline(source, gunzip, destination);
};

await decompress();