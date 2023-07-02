import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const initVue2Webpack = (creator) => {
    // 这是选择了Vue2
    // 先设置package
    // 再设置main.js
    // 再设置具体的内容
    // creator.extendPackage({
    //     dependencies: {
    //         vue: "^3.2.47"
    //     },
    // })

    // 将模板中的文件写到目标文件夹下
    creator.extend(__dirname + '\\template')
}