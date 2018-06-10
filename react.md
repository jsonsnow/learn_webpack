#### React特点
* 1.声明试设计-React采用声明凡事，可以轻松描述应用
* 2高效-React通过对DOM的模拟，最大限度地减少与DOM交互
* 3.灵活-可以与已知的库或框架很好地配合
* 4.JSX - JSX是JavaScript语法的扩展

#### 计算属性
ES6 computed property syntax 
允许将表达式放在方括号[]中，该表达式将被计算并用作属性名，

```
var i = 0;
var a = {
['foo' + ++i]:i,
['foo' + ++i]:i,
['foo' + ++i]:i
}
console.log(a.foo1);//1
console.log(a.foo2);//2
console.log(a.foo3);//3

var param = 'size'
var config = {
	[param]:12,
	['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]:4
}
console.log(config);//{size:12,mobileSize:4}

```

#### controlled compoent
在控制组件中指定特地的value可以锁定控件
prevents（阻止）

#### Lifting(举起) state up
Often,serval(几个点，各自的)components need to reflect the same change data, We recommend lifting the shared state up their closest common ancestor

```
function BoilingVerdict(props) {
	if(porps.celsius >= 100) {
		return <p>the water would boil.<p>
	}
	return <p>the wate would not boil.</p>
}

class Calculator extends React.Component {

	construct(props) {
		super(props);
		this.handleChange = this.handleChnage.bing(this);
		this.state = {temperature:''};
	}
	handleChange(e) {
		this.setState({temperature:e.target.value});
	}
	
	render() {
		const temperature = this.state.temerature;
		return (
			<fieldset>
			<legend>Enter temperature in Celsius:,</legend>
			<input value={temerature}
			onChange={this.handleChange}/>
			<BoilingVerdict celsius={paresFloat(temerature)}/>
			</fieldset>
		);
	}
}
```
本质用同一个状态去更新不同的组件