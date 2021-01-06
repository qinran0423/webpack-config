# 如何实现一个plugin

## webpack在编译代码过程中，有生命周期的概念，对应不同的打包阶段

## 不同打包阶段
* module
* Assets


## webpack打包流程
* 拿到配置，初始化工作，最终配置
* 实例化一个compiler类，注册插件，对应的声明周期绑定相应的事件
* 执行编译，compiler.run
* compiler -> compliation
* 递归处理所有的依赖 生成chunk
* 把chunk输出到output指定的位置