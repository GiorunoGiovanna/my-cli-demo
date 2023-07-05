import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const setHusky = (creator) => {
    // 将模板中的文件写到目标文件夹下
    creator.extend(__dirname + '\\.husky')
}