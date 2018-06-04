import React,{Component} from 'react'

class Like extends Component {
	constructor(props) {
		super(props);
		this.state = {liked:false};
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		var text = this.state.liked ? '喜欢':"不喜欢";
		return (<p onClick={this.handleClick}>
				你<b>{text}</b>我，点击切换状态。
			</p>);
	}

	handleClick(event) {
		this.setState({liked:!this.state.liked});
	}
}
export default Like