import path from 'path'
import { clearConsole } from './utils/clearConsole.js';
import { selectFramework } from './modules/Framework/index.js';
import { selectBundletool } from './modules/bundletool/index.js';
import { selectModule } from './modules/module/index.js';
import { installModules } from './utils/install.js';
import { checkDirExists } from './utils/checkDirExists.js';
import Creator from './creator.js';




async function create(name) {
    // 清空控制台
    clearConsole()

    // 检查是否有同名文件夹
    const isOverwrite = await checkDirExists(name)
    // 如果不覆盖同名文件夹，则直接返回
    if (!isOverwrite) return

    // 创建creator类
    const creator = new Creator(name)

    // 选择一个框架
    // const framework = await selectFramework(creator)

    // 选择一个打包工具
    // const bundletool = await selectBundletool(creator, framework)

    // 选择一个预设好的模板
    await selectModule(creator)

    // 把package.json渲染出来
    // creator.renderAst()

    console.log('\n', '正在安装依赖')

    // 在当前目录执行安装依赖命令
    await installModules('npm install', path.join(process.cwd(), name))

    console.log('\n', '安装完成!接下来', '\n\n', `cd ${name}`, '\n', 'npm run dev')
}

export default create