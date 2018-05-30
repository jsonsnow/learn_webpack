// main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import Like from './like'

import './main.css';

render(<Greeter />, document.getElementById('root'));
render(<Like/>,document.getElementById('like'));
