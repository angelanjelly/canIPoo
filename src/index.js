// import React from 'react';
import { render } from 'react-dom';
import Main from 'components/main';

// render(<App />, document.getElementById('app'));

import React from 'react';
// import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Main from './Main';
//import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const App = () => (
  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>
);
injectTapEventPlugin();

render(<App />, document.getElementById('app'));
