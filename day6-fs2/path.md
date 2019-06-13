# Node.js path 模块提供了一些用于处理文件路径的小工具

path.join([path1][, path2][, ...])
用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。

	path.extname(p)
返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串。

	path.parse(pathString)
返回路径字符串的对象。


	path.format(pathObject)
从对象中返回路径字符串，和 path.parse 相反。