import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    handleMenuClose();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
        zIndex: 1000,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Typography
            variant="h5"
            component="a"
            href="#"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #7dd3c9 0%, #5db5ac 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textDecoration: 'none',
              mr: 'auto',
            }}
          >
            DataHive
          </Typography>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    color: '#7dd3c9',
                    background: 'transparent',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              onClick={() => scrollToSection('#contact')}
              sx={{
                background: 'linear-gradient(135deg, #7dd3c9 0%, #5db5ac 100%)',
                textTransform: 'none',
                px: 3,
                py: 1,
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(125, 211, 201, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #6dc5bb 0%, #4da59c 100%)',
                  boxShadow: '0 6px 16px rgba(125, 211, 201, 0.4)',
                },
              }}
            >
              Get Started
            </Button>
          </Box>
          
          {/* Mobile Navigation */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={handleMenuOpen}
          >
            <MenuIcon sx={{ color: 'text.primary' }} />
          </IconButton>
          
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                mt: 1.5,
                borderRadius: 2,
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                minWidth: 200,
              },
            }}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                sx={{
                  py: 1,
                  '&:hover': {
                    background: 'rgba(125, 211, 201, 0.1)',
                  },
                }}
              >
                {item.label}
              </MenuItem>
            ))}
            <MenuItem
              onClick={() => scrollToSection('#contact')}
              sx={{
                py: 1,
                background: 'linear-gradient(135deg, #7dd3c9 0%, #5db5ac 100%)',
                color: '#fff',
                fontWeight: 600,
                mt: 1,
                '&:hover': {
                  background: 'linear-gradient(135deg, #6dc5bb 0%, #4da59c 100%)',
                },
              }}
            >
              Get Started
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

