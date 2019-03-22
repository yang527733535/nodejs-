#文件路径操作模块
 + 专门用来操作路径的
path.basename('路径名字')  这个方法可以找到一个路径的文件名字 带后缀哦
path.dirname('路径名字')  这个方法可以找到路径名 去掉了文件名字
path.extname('路径名字') 这个方法可以找到文件的扩展名
path.isAbsolute('路径名字') 判断是否绝对路径 返回的是布尔值
path.parse('path')  返回的是大杂烩 
path.join('path','')

## node中的其他成员 非模块成员
+ 在每个模块中，除了require exports等模块相关的api之外，还有两个特殊的成员
+ __dirname 可以用来获取当前文件模块所属目录的绝对路径
+ __filename 可以用来获取当前文件的绝对路径
+ 在文件操作中，使用相对路径是不可靠的，因为在Node中文件操作的路径被设计为相对于
执行NODE命令所处的路径

```path.basename('c:/a/b/a/v/index.js')
'index.js'
```

```
path.dirname('c:/a/b/a/v/index.js')
'c:/a/b/a/v'
```
