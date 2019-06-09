const steps=[
    {
        wait: 1,
        output: 'task a cost 1s'
    },
    {
        wait: 4,
        output: 'task b cost 4s'
    },
    {
        wait: 2,
        output: 'task c cost 2s'
    },
    {
        wait: 1,
        output: 'task d cost 1s'
    }
]

编写stepPromise函数实现按顺序打印output的内容，wait表示等待秒数，调用参考:
function promise(){

}
let progress = async ()=>{
    await stepPromise(steps[0])
    await stepPromise(steps[1])
    await stepPromise(steps[2])
    await stepPromise(steps[3])
}