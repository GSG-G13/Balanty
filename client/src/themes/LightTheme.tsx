import { PaletteColorOptions, createTheme } from '@mui/material';

const LightTheme = createTheme({
  typography: {
    fontFamily: 'IBM Plex Sans Arabic',
  },
  direction: 'rtl',
  palette: {
    primary: {
      main: '#2CB674',
      second: '#01031C',
      contrastText: '#000',
      backGroundColor: '#fff',
      grayColor: '#F2FCF5',
    } as PaletteColorOptions,
  },
});

export default LightTheme;
