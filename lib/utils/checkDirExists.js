import path from 'path'
import { existsSync } from 'node:fs';
import { select } from '@inquirer/prompts'


export const checkDirExists = async (name) => {
    const targetDirectory = path.join(process.cwd(), name)
    // 当前目录下是否存在同名文件，true为存在，false为不存在
    const exists = existsSync(targetDirectory)
    let isOverwrite = true

    // 如果存在同名文件夹，则询问是否覆盖
    if (exists) {
        isOverwrite = await select({
            message: '当前文件夹中已经存在同名项目。是否覆盖？',
            choices: [
                {
                    name: '确认覆盖',
                    value: true,
                },
                {
                    name: '取消',
                    value: false,
                },
            ],
        })
    }
    return isOverwrite
}