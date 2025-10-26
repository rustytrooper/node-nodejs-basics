import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const cpuCount = cpus().length;
    const workers = [];
    
    for (let i = 0; i < cpuCount; i++) {
        const worker = new Worker(join(__dirname, 'worker.js'), {
            workerData: 10 + i
        });
        
        workers.push(
            new Promise((resolve) => {
                worker.on('message', (result) => {
                    resolve(result);
                });
                worker.on('error', () => {
                    resolve({ status: 'error', data: null });
                });
            })
        );
    }
    
    const workerResults = await Promise.all(workers);
    console.log(workerResults);
};

await performCalculations();