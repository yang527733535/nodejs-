console.log(__dirname) //动态获取当前文件的绝对路径 不包括文件名字
console.log(__filename)//动态获取当前文件的绝对路径 包括文件名字
//因为在文件操作中 使用相对路径是不可靠的 绝对路径才是王道，不受任何影响，但是不好
//所以就有了一个动态的路径 所以我们就可以使用__dirname __filename