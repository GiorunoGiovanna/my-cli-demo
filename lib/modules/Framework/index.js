import { select, Separator } from '@inquirer/prompts'

export const selectFramework = async (creator) => {
    const framework = await select({
        message: 'Select a framwork (选择一个框架)',
        choices: [
            {
                name: 'Vue2',
                value: 'Vue2',
                // description: 'Vue is the most popular framwork',
            },
            {
                name: 'Vue3',
                value: 'Vue3',
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
    await import(`./${framework}/index.js`).then(res => {
        res[`init${framework}`](creator)
    })

    return framework
}