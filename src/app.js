import React from 'react';
import ReactDOM from 'react-dom';
import Tribute from './components/tribute';

import 'normalize.css/normalize.css'; // reset all browser conventions
import './styles/styles.scss';

ReactDOM.render(<Tribute />, document.getElementById('app'));