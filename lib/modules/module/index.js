import { select, Separator } from '@inquirer/prompts'

export const selectModule = async (creator) => {
    const module = await select({
        message: 'Select a Module (选择一个模板)',
        choices: [
            {
                name: 'Vue2+Webpack',
                value: 'Vue2Webpack',
                // description: 'Vue is the most popular framwork',
            },
            {
                name: 'Vue3+Vite',
                value: 'Vue3Vite',
                // description: 'Vue is the most popular framwork',
            },
            new Separator(),
            {
                name: 'React',
                value: 'React',
                // description: 'React is an awesome framwork',
                disabled: '(React is not available for now)',
            },
        ],
    })
    // 执行对应的框架初始化方法
    await import(`./${module}/index.js`).then(res => {
        res[`init${module}`](creator)
    })

    return module
}