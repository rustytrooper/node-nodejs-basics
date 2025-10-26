import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const sourcePath = join(__dirname, 'files', 'fileToCompress.txt');
    const targetPath = join(__dirname, 'files', 'archive.gz');
    
    const gzip = createGzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(targetPath);
    
    await pipeline(source, gzip, destination);
};

await compress();