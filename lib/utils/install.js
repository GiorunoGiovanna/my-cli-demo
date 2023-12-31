import { execa } from 'execa'
import { checkbox, select, Separator } from '@inquirer/prompts'

export const installModules = (command, cwd) => {
    return new Promise((resolve, reject) => {
        const child = execa(command, [], {
            cwd,
            stdio: ['inherit', 'pipe', 'inherit'],
        })

        child.stdout.on('data', buffer => {
            process.stdout.write(buffer)
        })

        child.on('close', code => {
            if (code !== 0) {
                reject(new Error(`command failed: ${command}`))
                return
            }
            resolve()
        })
    })
}