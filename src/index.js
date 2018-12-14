import React from 'react';
import ReactDOM from 'react-dom';
import BasicNav from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MuiThemeProvider } from '@material-ui/core'
import customTheme from './config/CustomTheme'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
<MuiThemeProvider theme={customTheme}>
    <BasicNav/>
</MuiThemeProvider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
