import { ReactElement } from 'react';
import './index.css';
import { ThemeProvider } from '@emotion/react';
// import RootLayout from './layouts/RootLayout';
import LightTheme from './themes';
import { HeroSection } from './components';

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={LightTheme}>
      {/* <RootLayout /> */}
      <HeroSection />
    </ThemeProvider>
  );
};

export default App;
