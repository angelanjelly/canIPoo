import { render } from 'react-dom';
import Main from 'components/main';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>
);

injectTapEventPlugin();

render(<App />, document.getElementById('app'));
