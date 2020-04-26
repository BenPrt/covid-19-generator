import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#64d8cb',
      main: '#26a69a',
      dark: '#00766c',
      contrastText: '#000000',
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#26a69a',
        },
        '&:focus': {
          outline: 'none',
        },
      },
    },
    MuiIconButton: {
      root: {
        color: '#000000',
        '& svg': {
          fontSize: 32,
        },
        margin: -16,
        '&:focus': {
          outline: 'none',
        },
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      colorSecondary: {
        color: '#FFFFFF',
      },
      sizeSmall: {
        '& svg': {
          fontSize: 24,
        },
      },
    },
    MuiInput: {
      underline: {
        '&&&&:hover:before': {
          borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
        },
      },
    },
  },
});

export default theme;
