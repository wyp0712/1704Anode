const fs = require('fs');
class Files {
    constructor({ template, output, modules }) {
        this.template = template;
        this.output = output;
        this.modules = modules;
        this.writefile().then(res => {
            console.log(res, 'res')
            fs.writeFile(output, res, function(err, data) {
                console.log('success')
            })
        })
    }
    /**
     * 2. 获取内容
     * 1. 一次性写入
     * 
     */

    // 写入函数
    async writefile() {
        let html = await this.readfile(this.template)
        for (let val of this.modules) {
            console.log(val, 'val') // style script
           let text = await this.getHtml(val.type, val.files)
          html = html.replace(`<!--injection ${val.type}-->`, text)
        }
        console.log(html, 'html')

        return html

    }

    // 读取内容函数
    async getHtml(tag, files) {

        let str = `<${tag}>`
        for (var k of files) {
            console.log(k)
            str += await this.readfile(k)
        }
        str += `</${tag}>`

        return str;
    }

    readfile(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, (err, data) => {
                if (err) {
                    reject(err.message)
                    return;
                }
                resolve(data.toString());
            })
        })
    }
}

new Files({
    template: './src/index.html',
    output: 'index.html',//最终生成的文件路径
    modules: [
        {
            type: 'script',
            files: ['./src/static/js/index.js']
            //按照数组顺序 生成script标签放入到indexhtml中
        },
        {
            type: 'style',
            files: ['./src/static/css/common.css', './src/static/css/style.css']
            //按照数组顺序 生成style标签放入到indexhtml中
        }
    ]
})
