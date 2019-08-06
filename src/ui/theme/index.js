import { createMuiTheme } from '@material-ui/core/styles';

// const primaryColor = '#37474f';
const primaryColor = '#424242';
const secondaryColor = '#FFAB91';
// const bgColor = '#102027';
const bgColor = '#212121';
const textColor = '#eeeeee';

export default createMuiTheme({
  palette: {
    primary: { main: primaryColor },
    secondary: { main: secondaryColor },
    background: { default: bgColor },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: primaryColor,
        color: textColor,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: '1px solid rgba(81, 81, 81, 1)',
      },
      head: {
        color: 'white',
      },
      body: {
        color: textColor,
      },
    },
  },
})