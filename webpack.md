Webpack:把你的项目当做一个整体，通过一个给定的主文件，webpack将从这个文件开始找到你的项目的所有依赖，使用loaders处理它们，最后打包为一个(或多个)浏览器可识别的javaScript文件

cnpm，安装依赖库

```
Cnpm install -g webpack//全局安装
```

```
npm install —save-dev webpack //安装在项目目录
```
```
npm init //命令可以自动创建package.json文件
```
命令行使用webpack需要单独的安装webpack-cli
Webpack-cli xxx xxx

####通过配置文件来使用webpack
在跟项目目录新建一个webpack.config.js的文件
```
mudule.exports = {	
	entry:__dirname + "/app/main.js"
	output:{
		path:__dirname + "/public",
		filename:"boundle.js"
	}
}
```

这个配置指定了入口文件路径和打包后文件的存放路径(__dirname是node.js的一个全局变量，他指向当前执行脚本所在的目录)
有了这个配置后，再打包文件，只需要在终端运行webpack命令就行

####更快捷的执行打包任务
通过npm可以引导任务执行，对npm进行配置后可以再命令行中使用简单的npm start命令来代替，在package.json中对scripts对象进行相关设置即可
```
	"script":{
		"start":"webpack"
	},
```

>注：package.json中的script会按照一定的顺序寻找命令所对应位置，本地node_moudules/.bin 路径就在这个寻找清单中，所以无论是全局安装还是局部安装的webpack，可以直接指定为webpack就行

npm 的 start 命令是一个特殊的脚本名称，其特殊性表现在，在命令行中使用npm start就可以执行其对应的命令，如果对应的脚本名称不是start,想要在命令行中运行时，需要这样用npm run {script name} eg:npm run build

####webpack的强大功能
#####生成Source maps（使调试更容易）
通过简单的配置，webpack就可以在打包时候为我们生成source maps
webpack的配置文件中配置source maps,需要配置devtool,它有四种不同的配置选项，各具优缺点

devtool选项 	|配置结果
-------------|-------------|
source-map   |    在一个单独文件中产生一个完成功能完全的文件，这个文件具有最好的source map         
cheap-module-source-map|不带映射的map|
eval-source-map|调试用，生产阶段一定不要启用|
cheap-module-eval-source-map|与eval相似|

配置文件如下
```
module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  }
}
```

####使用webpack构建本地服务器
webpack提供一个可选的本地开发服务器，这个服务器基于node.js构建，可以实现你想要的这些功能，不过它是一个单独的组件，在webpack中进行配置之前需要单独安装它作为项目依赖

```
npm install --save-dev webpack-dev-server
```
devserver作为webpack配置中的一项，有如下配置

devserver的配置|功能描述
-----|-------|
contentbase| 默认webpack-dev-server会为跟文件夹提供本地服务器，如果想另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录|
port|设置默认监听端口，如果省略，默认为8080|
inline|这种true,当源文件改变时候，会自动刷新页面
historyApiFallback|在开发单页面非常有用，它依赖于HTML5 histroy apu,如果设置为true,所有跳转都指向index.html

``` 
 module.exports = {
 	devttol:'eval-source-map',
 	entry:__dirname + '/app/main.js',
 	output:{
 		paht:__dirname + "/public",
 		filename:"bundle.js"
 	}
 	devServer:{
 	contentBase:"./public".//本地服务器所加载的页面所在的目录
 	historyApiFallback:true,//不跳转
 	inline:true//事实刷新
 	}
}
```

在packeage.json中的scripts对象添加如下命令

```
[
scripts: {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack",
    "server": "webpack-dev-server --open"
  },
```

####loaders
通过使用不同的loader,webpack有能力调用外部的脚步或工具，实现对不同格式文件的处理，比如说分析转换sccs为css，或者把下一代的js文件(ES6,ES7)转换为现代浏览器兼容的js文件，对react的开发而言，合适和loaders可以把react中用的jsx文件转换为js文件。

loaders需要单独安装并且需要在webpack.config.js中的modules关键字进行配置，loaders的配置包括以下几方面：

*  test:一个用以匹配loaders所处理文件的扩展名的正则表达式(必须)
*  loader:loader的名称(必须)
*  include/exclude：手动添加必须处理的文件(文件夹)或屏蔽不需要处理的文件
*  query:为loaders提供额外的设置选项(可选)


####Babel
babel其实一个编译javascript的平台，它可以编译代码帮你达到以下的目的:

* 让你能使用最新的JavaScript代码，而不用管新标准示是否被当前浏览器支持
* 让你能使用基于JavaScript进行扩展的语言，比如React的JSX；

####Babel的安装与配置
babel其实是几个模块化的包，其核心功能位于babel-core的npm包中，webpack可以把其中不同的包整合在一起使用，对于每一个需要的功能或扩展，你都需要安装单独的包(用得最多的是解析ES6的babel-env-preset包和解析JSX的babel-preset-react)

####babel的配置
babel可以完全在webpack.config.js中进行配置，但是考虑到babel具有非常多的配置选项，在单一的webpack.config.js文件进行配置使得文件显得太复杂，因此一些开发者支持吧babel的配置选项放在单独的名为".babelrc"，（webpack会自动调用.babelrc里的babel配置选项）


 