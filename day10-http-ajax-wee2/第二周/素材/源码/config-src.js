const fs = require('fs');
class Files {
    constructor({ template, output, modules }) {
        this.template = template;
        this.output = output;
        this.modules = modules;
        this.writefile().then(res => {
            fs.writeFile(this.output, res, () => {
                console.log('生成成功')
            });
        })
    };
    async writefile() {
        console.log("======")
        let html = await this.readfile(this.template);
        for (let val of this.modules) {
            let text = await this.getFileText(val.type, val.files);
            html = html.replace(`<!--injection ${val.type}-->`, text)
        }
        return html;
    }
    async getFileText(tag, arr) {
        let text = `<${tag}>`;
        for (let url of arr) {
            text += await this.readfile(url);
        }
        text += `</${tag}>`;
        return text;
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
            ////按照数组顺序 生成style标签放入到indexhtml中
        }
    ]
})