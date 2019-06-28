let [username,phone,pwd,curPwd,agree] = [...document.querySelectorAll('input')];

let registryBtn = document.querySelector('#registry-btn');

registryBtn.addEventListener('click',() => {
    let userVal = username.value;
    let phoneVal = phone.value;
    let pwdVal = pwd.value;
    let curVal = curPwd.value;
    let isCheck = agree.checked;
    console.log(isCheck)

    if(!userVal || !phoneVal || !pwdVal || !curVal || !isCheck || pwdVal != curVal ){
        alert("信息不对")
    }else{
        axios.post('/api/registry',{username:userVal,pwd:pwdVal,phone:phoneVal})
        .then(res => {
            console.log(res)
            if(res.data.code === 1){
                window.localStorage.setItem('username',userVal);
                location.href="../index.html"
            }else{
                alert(res.data.msg)
            }
        })
    }

},false)