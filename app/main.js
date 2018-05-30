// main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import Like from './like'
import MyForm from './Form'

import './main.css';

render(<Greeter />, document.getElementById('root'));
render(<Like/>,document.getElementById('like'));
render(<MyForm/>,document.getElementById('form'));
