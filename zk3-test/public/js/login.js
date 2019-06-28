let changeBtn = document.querySelector('#change-btn');
let yan = document.querySelector('#yan');
let subBtn = document.querySelector('#sub-btn');
let [usernameIpt,pwdIpt,yanIpt] = [...document.querySelectorAll('input')];

//点击换一换
changeBtn.addEventListener('click',() => {
    axios.get('/api/yan').then(res => {
        console.log(res)
        if(res.data.code === 1){
            yan.innerHTML = res.data.data;
        }
    })
},false) //false 冒泡 true 捕获

//点击登录
subBtn.addEventListener('click',() => {
    let username = usernameIpt.value;
    let pwd = pwdIpt.value;
    let yan = yanIpt.value;

    if(!username || !pwd || !yan){
        alert("用户信息不完整")
    }else{
        axios.post('/api/login',{username,pwd,yan}).then(res => {
            console.log(res)

            if(res.data.code === 1){
                alert('登录成功');
                location.href="../list.html"
            }
        })
    }
},false)