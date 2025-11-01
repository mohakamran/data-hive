import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  GitHub, 
  Twitter, 
  LinkedIn, 
  Facebook,
  Instagram 
} from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Twitter />, url: '#', name: 'Twitter' },
    { icon: <LinkedIn />, url: '#', name: 'LinkedIn' },
    { icon: <GitHub />, url: '#', name: 'GitHub' },
    { icon: <Facebook />, url: '#', name: 'Facebook' },
    { icon: <Instagram />, url: '#', name: 'Instagram' },
  ];

  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Security', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Support', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR', href: '#' },
    ],
  };

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        color: 'rgba(255, 255, 255, 0.9)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #7dd3c9 0%, #D8F8E8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                DataHive
              </Typography>
              
              <Typography
                variant="body2"
                sx={{
                  mb: 3,
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.8,
                }}
              >
                Transform your data into actionable insights with our powerful analytics platform.
                Built for teams who value intelligence and simplicity.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      component={Link}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#7dd3c9',
                          borderColor: '#7dd3c9',
                          background: 'rgba(125, 211, 201, 0.1)',
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
          
          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <Grid size={{ xs: 6, sm: 6, md: 2 }} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx + 1) * 0.1 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: '#fff',
                  }}
                >
                  {title}
                </Typography>
                
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {links.map((link, linkIdx) => (
                    <Box component="li" key={linkIdx} sx={{ mb: 1.5 }}>
                      <Link
                        href={link.href}
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          fontSize: '0.95rem',
                          transition: 'all 0.3s ease',
                          display: 'inline-block',
                          '&:hover': {
                            color: '#7dd3c9',
                            transform: 'translateX(5px)',
                          },
                        }}
                      >
                        {link.label}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        
        {/* Bottom Bar */}
        <Box
          sx={{
            mt: 6,
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            © {currentYear} DataHive. All rights reserved.
          </Typography>
          
          
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

