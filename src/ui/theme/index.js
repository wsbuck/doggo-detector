import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#37474f' },
  secondary: { main: '#FFAB91' },
  background: { default: '#102027' },
  MuiPaper: { color: '#37474f' },
};
const themeName = 'Cutty Sark Mona Lisa Ostracod';

export default createMuiTheme({ palette, themeName });