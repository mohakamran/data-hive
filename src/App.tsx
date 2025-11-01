import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ overflow: 'hidden' }}>
        <Navbar />
        <Box component="section" id="home">
          <Hero />
        </Box>
        <Box component="section" id="features">
          <Features />
        </Box>
        <Box component="section" id="pricing">
          <Pricing />
        </Box>
        <Box component="section" id="contact">
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
