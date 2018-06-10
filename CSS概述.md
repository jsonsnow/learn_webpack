#### CSS概述

* CSS指层叠样式表（Cascading Style Sheets）
* 样式定义如何显示HTML元素
* 样式通常存储在样式表中
* 把样式添加到HTML 4.0中，是为了解决内容与表现分离的问题
* 外部样式可以极大提高工作效率
* 外部样式表通常存储在CSS文件中
* 多个样式定义可层叠为一

#### 样式布局解决了一个普遍问题  
HTML 标签原本被设计为用于定义文档内容。通过使用\<h1>,\<p>,\<table>这样的标签，HTML的初衷是表达这是标题，这是段落，这是表格之类的的信息，同时文档布局由浏览器来完成，而不使用任何的格式标签。

由于两种主要的浏览器(Netscape 和 internet Explorer)不断的将HTML标签和属性(比如字体标签和颜色属性)添加到HTML规范中，创建文档内容清晰地独立于文档表现层的站点变得越来越困难。因此有Style概念


#### 样式表极大地提高了工作效率  

样式表定义如何显示HTML元素，样式通常保持在外部的.css文件中。通过一个CSS文档，外部样式表使你有能力同时改变站点中所有页面的布局和外观。

#### 多重样式将层叠为一个

样式表允许多种方式规定样式信息，样式可以规定在单个的HTML元素中，在HTML页得头元素中，或一个外部的CSS文件中，甚至可以同时在同一个HTML文档内部引用多个外部样式表
##### 层叠次序
当同一个HTML元素被不止一个样式定义时，会使用哪个样式呢？

* 1.浏览器缺省设置
* 2.外部样式表
* 3.内部样式表（位于<head>标签内）
* 4.内联样式表(在THML元素内部)

因此内联样式拥有最高的优先级

#### CSS语法

CSS规则由两个主要部分构成，选择器，以及一条或多条声明
selector {decalaration1;declaration2;...declarationN}
选择器通常是需要改变样式的HTML元素。

每条声明由一个属性和一个值祖册。
属性(property)是您希望设置的样式属性(style attribute).每个属性有一个值，属性和值被冒号分开。

```
selector {property:value}
```

h1 {color:red,font-size:14px}

h1是选择器，color和font-size是属性，red和14px是值

若值为若干单词，则要给值加引号
p {font-family:"sans serif";}

#### 选择器的分组
你可以对选择器进行分组，这样，被分组的选择器就可以享用相同的声明。用逗号将需要分组的选择器分开，在下面例子中对所有标题元素进行了分组，所有的标题元素都是绿色的

```
h1,h2,h3,h4,h5,h6 {
	color:green;
}
```

#### 继承以及其问题

```
body {
	font-family:Verdana,sans-serif;
}
```

根据上面这条规则，站点的body元素将使用Verdana字体（加入访问者的系统存在该字体的话）
通过CSS继承，子元素将继承最高级元素(在本例中是body)所拥有的属性（这些子元素诸如p,td，ul,ol,ul）不需要另外的规则，所有的body的子元素都应该显示Verdada字体，子元素的子元素也一样，

#### 继承是一个诅咒吗？

如果你不希望"Verdada,sans-serif"字体被所有的子元素继承，又该怎么做，比如不希望段落继承该属性
创建一个针对P的特殊规则，这样它就会摆脱父元素的规则：

```
body {
	font-family:Verdana,sans-serif;
}

p {
	font-family:Times,"Times New Roman,serif";
}
```

#### 派生选择器

```
li strong {
	font-style:italic;
	font-weight:normal;
}
```

#### CSS id 选择器
id 选择器
id 选择器可以为标有特点id的HTML元素指定特点的样式
id 选择器以“#”来定义

```
#red {color:red;}
#greed:{color:green;}
```

#### id选择器和派生选择器

```
#sidebar p {
	font-style:italic;
	text-align:right;
	margin-top:0.5em;
}
```

上面的样式只会作用于出现在id是sidebar的元素的段落

#### CSS类选择器
在css中，类选择器以一个点号显示

```
.center {text-align:center}
```

表示所有拥有center类的html元素均为居中  
注意：类名的第一个字符不能使用数字，它无法再Mozila或Firefox中起作用

和id一样，class也可以被用作派生选择器

```
.fancy td{
	color:#f60;
	background:#666;
}
```

类名为fancy的更大元素内部的表格单元都会议灰色班级显示

##### 元素也可以基于他们的类而被选择

```
td.fancy {
	color:#f60;
	background:#666;
}
```
表示类名为fancy的表格单元将是灰色背景的橙色