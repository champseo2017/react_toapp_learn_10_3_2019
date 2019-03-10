import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

{/* เราสามารถ Render Component กี่อันก็ได้ ภายใน  document.getElementById('root') */}
ReactDOM.render(

<App/>
,document.getElementById('root')

);
serviceWorker.unregister();