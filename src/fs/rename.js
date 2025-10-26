import { rename as Rename}  from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
};

await rename();