import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const initWebpack = (creator) => {
    // 先设置package
    // 再设置main.js
    // 再设置具体的内容
    creator.extendPackage({
        scripts: {
            dev: 'set NODE_OPTIONS=--openssl-legacy-provider && webpack-dev-server',
            build: 'webpack'
        },
        devDependencies: {
            "webpack": "^5.44.0",
            'webpack-dev-server': '^3.11.2',
            'webpack-cli': '^3.3.11',
            'vue-loader': '^15.9.6',
        },
    })

    // 将模板中的文件写到目标文件夹下
    creator.extend(__dirname + '\\template')
}