import { fork } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const scriptPath = join(__dirname, 'script.js');
    const children = fork(scriptPath, args, {
        silent: true, 
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'] 
    });

    process.stdin.on('data', (data) => {
        children.send({ type: 'stdin', data: data.toString() });
    });
    
    children.on('message', (message) => {
        if (message.type === 'stdout') {
            process.stdout.write(message.data);
        }
    });
    
    children.on('error', (err) => {
        console.error('Child process error:', err);
    });
    
    children.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
};

spawnChildProcess(['one', 'five']);
