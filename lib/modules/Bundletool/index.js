import { select, Separator } from '@inquirer/prompts'

export const selectBundletool = async (creator, framework) => {
    const bundletool = await select({
        message: 'Select a bundletool (选择一个框架)',
        choices: [
            {
                name: 'Vite',
                value: 'Vite',
                // disabled: framework === 'Vue2' ? '(Vue2 + vite is not available for now)' : false
            },
            {
                name: 'Webpack',
                value: 'Webpack',
            },
            // new Separator(),
            // {
            //     name: 'JQuery',
            //     value: 'JQuery',
            //     disabled: '(JQuery is not available for now)',
            // },
        ],
    })
    // 执行对应的框架初始化方法
    await import(`./${bundletool}/index.js`).then(res => {
        res[`init${bundletool}`](creator)
    })
}