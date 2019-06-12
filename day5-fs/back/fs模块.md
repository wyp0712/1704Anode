# fs模块用于对系统文件及目录进行读写操作。

## 使用require('fs')载入fs模块，模块中所有方法都有同步和异步两种形式。

 异步方法中回调函数的第一个参数总是留给异常参数（exception），如果方法成功完成，该参数为null或undefined。

# 异步写法demo:有一个回调函数。
var fs = require('fs'); // 载入fs模块
fs.unlink('/tmp/shiyanlou', function(err) {
    if (err) {
        throw err;
    }
    console.log('成功删除了 /tmp/shiyanlou');
});

var fs = require('fs');
fs.unlinkSync('/tmp/shiyanlou'); // Sync 表示是同步方法
console.log('成功删除了 /tmp/shiyanlou');

# 读取文件
## fs.readFile(filename,[option],callback) 方法读取文件。

var fs = require('fs'); // 引入fs模块

fs.readFile('./test.txt', function(err, data) {
    // 读取文件失败/错误
    if (err) {
        throw err;
    }
    // 读取文件成功
    console.log(data);
});
这是原始二进制数据在缓冲区中的内容。
要显示文件内容可以使用toString()或者设置输出编码。

// 使用toString()
fs.readFile('./test.txt', function(err, data) {
    // 读取文件失败/错误
    if (err) {
        throw err;
    }
    // 读取文件成功
    console.log(data.toString());
});

// 设置编码格式
fs.readFile('./test.txt', 'utf-8', function(err, data) {
    // 读取文件失败/错误
    if (err) {
        throw err;
    }
    // 读取文件成功
    console.log('utf-8: ', data.toString());
　　//直接用console.log(data);也可以
});


readFile同步的写法就是没有回调函数：fs.readFileSync(filename,[options])。


# WriteFile写入文件

## 使用fs.writeFile(filename,data,[options],callback)写入内容到文件。

var fs = require('fs'); // 引入fs模块

// 写入文件内容（如果文件不存在会创建一个文件）
// 写入时会先清空文件
fs.writeFile('./test2.txt', 'test test', function(err) {
    if (err) {
        throw err;
    }

    console.log('Saved.');

    // 写入成功后读取测试
    fs.readFile('./test2.txt', 'utf-8', function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });

    var fs = require('fs'); // 引入fs模块

// 写入文件内容（如果文件不存在会创建一个文件）
// 传递了追加参数 { 'flag': 'a' }
fs.writeFile('./test2.txt', 'test test', { 'flag': 'a' }, function(err) {
    if (err) {
        throw err;
    }

    console.log('Saved.');

    // 写入成功后读取测试
    fs.readFile('./test2.txt', 'utf-8', function(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });

flag传值，r代表读取文件，w代表写文件，a代表追加。


# 五、目录操作

## 1、创建目录

使用fs.mkdir(path,[mode],callback)创建目录，path是需要创建的目录，[mode]是目录的权限（默认是0777），callback是回调函数。
demo:mkdir.js内容如下

var fs = require('fs'); // 引入fs模块

// 创建 newdir 目录
fs.mkdir('./newdir', function(err) {
    if (err) {
        throw err;
    }
    console.log('make dir success.');
});
删除目录可以用fs.rmdir(path,callback);但是只能删除空目录。

2、读取目录

使用fs.readdir(path,callback)读取文件目录。
var fs = require('fs'); // 引入fs模块

fs.readdir('./newdir', function(err, files) {
    if (err) {
        throw err;
    }
    // files是一个数组
    // 每个元素是此目录下的文件或文件夹的名称
    console.log(files);
});


# fs.appendFile
语法：
fs.appendFile("文件路径",data,function(err){});
功能：
## fs.appenfFile通过异步的方式将文本内容或数据添加到文件里，如果文件不存在会自动创建。

# fs.appendFileSync
语法
fs.appendFileSync（“文件名”，data）;
功能：
## fs.appendFileSync通过同步的方式将文本内容或数据添加到文件里，文件不存在则自动创建。


# 判断文件是否存在      
fs.exists(文件路径,callback(是否存在));    