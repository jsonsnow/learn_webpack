import React,{Component} from 'react'

class MyForm extends Component  {
	constructor(props) {
		super(props);
		this.state = {value:"Hello Runoob!"};
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		var value = this.state.value;
		return (
			<div>
			<input type="text" value={value} onChange={this.handleChange}/>
			<h4>{value}</h4>
			</div>
			);
	}
	handleChange(event) {
		this.setState({value:event.target.value});
	}
}
export default MyForm