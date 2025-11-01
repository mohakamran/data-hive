import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Analytics, Speed, Security } from '@mui/icons-material';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(90deg, #C7F9FF 0%, #D8F8E8 100%)',
        overflow: 'hidden',
        pt: 8,
        pb: 8,
      }}
    >
      <ParticlesBackground />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                fontWeight: 800,
                background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              DataHive
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontWeight: 400,
              }}
            >
              Transform Your Data Into Actionable Insights
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 6,
                fontSize: '1.25rem',
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              The smart analytics platform that helps you understand your data like never before.
              Real-time insights, predictive analytics, and beautiful visualizations.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #7dd3c9 0%, #5db5ac 100%)',
                    boxShadow: '0 8px 24px rgba(125, 211, 201, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #6dc5bb 0%, #4da59c 100%)',
                      boxShadow: '0 12px 32px rgba(125, 211, 201, 0.4)',
                    },
                  }}
                >
                  Get Started Free
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: '1.1rem',
                    borderColor: '#7dd3c9',
                    color: '#7dd3c9',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      background: 'rgba(125, 211, 201, 0.1)',
                    },
                  }}
                >
                  Watch Demo
                </Button>
              </motion.div>
            </Box>
          </motion.div>
          
          {/* Feature highlights */}
          <Box
            sx={{
              mt: 8,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            {[
              { icon: <Analytics sx={{ fontSize: 40 }} />, text: 'Advanced Analytics' },
              { icon: <Speed sx={{ fontSize: 40 }} />, text: 'Real-time Processing' },
              { icon: <Security sx={{ fontSize: 40 }} />, text: 'Enterprise Security' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 24px rgba(125, 211, 201, 0.2)',
                    },
                  }}
                >
                  <Box sx={{ color: '#7dd3c9', mb: 1 }}>{item.icon}</Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {item.text}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

