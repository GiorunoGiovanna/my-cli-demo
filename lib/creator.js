import {
    readdirSync,
    readFileSync,
    writeFileSync,
    existsSync,
    lstatSync,
    mkdirSync
} from 'node:fs';
import path from 'path'

// 当前执行命令所在的目录
// const __dirname = process.cwd()
const mkdirRecursive = (dirname) => {
    // 判断是否存在当前 path 的最后一层目录
    if (existsSync(dirname))
        // 存在，则不做操作，直接返回
        return true
    // 若不存在，则判断当前 path 倒数第二层目录是否存在
    // path.dirname 可以获取当前路径的上一层路径
    // 例如： /dirName1/dirName2/dirName3
    // path.dirname('/dirName1/dirName2/dirName3') // /dirName1/dirName2
    if (mkdirRecursive(path.dirname(dirname))) {
        // 若存在，则在当前目录，创建下一层目录
        mkdirSync(dirname)
        return true
    }
}
class Creator {
    constructor(name) {
        // ast虚拟语法树，将我们想要构建的项目的结构和文件先用ast表示出来，
        // 然后当我们搭配好想要的结构再统一渲染
        this.ast = {
            name,
            version: '0.1.0',
            dependencies: {},
            devDependencies: {},
        }
        this.__dirname = path.join(process.cwd(), name)
        mkdirRecursive(this.__dirname)
    }

    // 添加package.json选项
    extendPackage(data) {
        const pkg = this.ast
        for (const key in data) {
            const value = data[key]
            pkg[key] = value
        }
    }


    // 添加文件
    extend(directory, base = '') {
        for (const dirEntry of readdirSync(directory)) {
            // 源文件地址
            const sourceFliePath = path.join(directory, dirEntry)
            // 目标文件地址
            const goalFliePath = path.join(this.__dirname, base, dirEntry)
            // 当前目录的状态（是文件夹还是文件）
            const fileStat = lstatSync(sourceFliePath)
            if (fileStat.isDirectory()) {
                // 这是个文件夹，还要向下遍历
                mkdirRecursive(goalFliePath)
                this.extend(sourceFliePath, path.join(base, dirEntry))
            } else {
                // 这是个文件，直接写入
                // 源文件
                const sourceFile = readFileSync(sourceFliePath)
                writeFileSync(goalFliePath, sourceFile)
            }
        }
    }

    // 渲染package
    renderAst() {
        const file = JSON.stringify(this.ast, null, 2) + '\n'
        writeFileSync(this.__dirname + '/package.json', file)
    }
}

export default Creator