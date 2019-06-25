注册npm账号：邮箱验证

新建文件夹：打开终端 （window: cmd）

1. npm init 初始化当前文件夹为npm的包管理文件夹 出现package.json 为止；
2. 如果以前是淘宝镜像的话，要更改过来。 npm config set registry http://registry.npmjs.org 
3. npm login  会要求你输入账号 密码 邮箱
4. 出现这一行就说明成功了： Logged in as devinwang on http://registry.npmjs.org/.
5. 输入 npm publish


 查看版本： npm view devinwangday versions

 如何更新自己写的npm包（模块），我们已经在npm中发布了一个1.0.0版本的包；

    1、本地更新版本号
        比如我想来个1.0.1版本，注意，是最后一位修改了增1，那么命令
        ：npm version patch    回车就可以了；
        比如我想来个1.1.0版本，注意，是第二位修改了增1，那么命令
        ：npm version minor    回车就可以了；
        比如我想来个2.0.0版本，注意，是第一位修改了增1，那么命令
        ：npm version major     回车就可以了；
    2、修改远端的版本,提交到远端npm中：
        npm publish 
