ajax.get({
    url: 'http://localhost:3000/admin?page=1&size=5'
}).then(res => {
    console.log(res, 'res----------1')
})