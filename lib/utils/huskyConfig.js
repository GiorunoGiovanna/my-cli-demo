// 获取到传入的commit信息
const msg = process.argv.slice(2).join('')

const commitRE = /^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|release|workflow)(\(.+\))?: .{1,50}/
console.log(msg)
if (!commitRE.test(msg)) {
    console.log('\x1B[31m%s\x1B[0m', 'ERROR: 不合法的 commit 消息格式。')
    console.error(`请查看 git commit 提交规范:https://github.com/woai3c/Front-end-articles/blob/master/git%20commit%20style.md`)
    process.exit(1)
}
