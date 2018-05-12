import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';

const muiTheme = createMuiTheme();

class Header extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <header>
            <AppBar position="static">
              <Typography variant="title" color="inherit">
                Title
              </Typography>
            </AppBar>
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Header;
