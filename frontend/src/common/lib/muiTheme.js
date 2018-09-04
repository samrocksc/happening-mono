import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#00897b',
    },
    secondary: {
      main: '#ffca28',
    },
  },
  status: {
    danger: 'orange',
  },
});

export default muiTheme;
