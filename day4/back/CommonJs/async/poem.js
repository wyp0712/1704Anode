let poem = [
    "《致橡树》——舒婷",
    "我如果爱你——",
    "绝不像攀援的凌霄花，",
    "借你的高枝炫耀自己；",
    "我如果爱你——",
    "绝不学痴情的鸟儿，",
    "为绿荫重复单调的歌曲；",
    "也不止像泉源，",
    "常年送来清凉的慰藉；",
    "也不止像险峰，",
    "增加你的高度，",
    "衬托你的威仪。",
    "甚至日光，",
    "甚至春雨。",
    "不，",
    "这些都还不够！",
    "我必须是你近旁的一株木棉，",
    "作为树的形象和你站在一起。",
    "根，",
    "紧握在地下；",
    "叶，",
    "相触在云里。",
    "每一阵风过，",
    "我们都互相致意，",
    "但没有人，",
    "听懂我们的言语。",
    "你有你的铜枝铁干，",
    "像刀，",
    "像剑，",
    "也像戟；",
    "我有我红硕的花朵，",
    "像沉重的叹息，",
    "又像英勇的火炬。",
    "我们分担寒潮、",
    "风雷、",
    "霹雳；",
    "我们共享雾霭、",
    "流岚、",
    "虹霓。",
    "仿佛永远分离，",
    "却又终身相依。",
    "这才是伟大的爱情，",
    "坚贞就在这里：",
    "爱——",
    "不仅爱你伟岸的身躯，",
    "也爱你坚持的位置，",
    "足下的土地。",
];


function createElement(str) {
    return new Promise((resolve) => {
        let li = document.createElement('li')
        li.innerHTML = str;
        document.body.appendChild(li)
        setTimeout(() => {
            resolve();
        }, 1000)
    })
}

async function render() {
    // await createElement(poem[0])
    // await createElement(poem[1]) // 执行的前提是：上一个await执行完成 => resolve
    // await createElement(poem[2]) // 执行的前提是：上一个await执行完成 => resolve
    for(let i = 0; i < poem.length; i++) {
        // createElement(poem[i])
        await createElement(poem[i])
    }
}
render()