import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { join } from 'path';
import { pipeline } from 'stream/promises';

const compress = async () => {
    const sourcePath = join(process.cwd(), 'fileToCompress.txt');
    const targetPath = join(process.cwd(), 'archive.gz');
    
    const gzip = createGzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(targetPath);
    
    await pipeline(source, gzip, destination);
};

await compress();