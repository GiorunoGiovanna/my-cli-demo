import { readFileSync } from 'node:fs';
const msgPath = process.env.HUSKY_GIT_PARAMS
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRE = /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
    console.log(msg)
    console.error(`
        ' ERROR: 不合法的 commit 消息格式。' \n\n\n
        请查看 git commit 提交规范：'git-commit-style.md'`)
    process.exit(1)
}
