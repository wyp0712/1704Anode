#### path
nodeje 内置模块 帮助我们规范化路径
path.join('路径1', '路径2', '路径2',...) 将这些路径拼接起来  需要注意../  返回拼接 后的路径
path.extname('路径') 返回扩展名，找最后一个.之后所有东西，包括最后一个. 除了放在最前面的.
path.dirname('路径')  返回文件夹所在目录，自动过滤最后一个/后面的东西


二、path.join(path1，path2，path3.......)

  作用：将路径片段使用特定的分隔符（window：\）连接起来形成路径，并规范化生成的路径。若任意一个路径片段类型错误，会报错。

三、path.resolve([from...],to)

作用：把一个路径或路径片段的序列解析为一个绝对路径。相当于执行cd操作。/被解析为根目录。