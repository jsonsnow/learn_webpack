//Greeter,js
import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css'
import img from 'react'

class Greeter extends Component{
  render() {
    return (
    <div>
      <div className={styles.root}>
        {config.greetText}
      </div>
      <a href="https://www.jianshu.com/u/32a4f66e419b">tap</a>
      <br/>
      <img src="http://img02.tooopen.com/images/20160509/tooopen_sy_161967094653.jpg"/>
      </div>
     );
  }
}

export default Greeter
