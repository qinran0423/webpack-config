
webpack 打包构建流程

1. 拿到配置  
2. 初始化一个compiler类 加载所有插件， compiler.run()
3. entry -> loader 
4. entry -> index.less  递归处理所有的依赖
5. 生成chunk 依赖关系
6. output bundle