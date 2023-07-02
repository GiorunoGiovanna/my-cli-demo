import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const initVite = (creator) => {
    // 先设置package
    // 再设置main.js
    // 再设置具体的内容
    creator.extendPackage({
        type: 'module',
        scripts: {
            "dev": "vite",
            "build": "vite build",
            "preview": "vite preview"
        },
        devDependencies: {
            "@vitejs/plugin-vue": "^4.1.0",
            "vite": "^4.3.9"
        },
    })

    // 将模板中的文件写到目标文件夹下
    creator.extend(__dirname + '\\template')
}