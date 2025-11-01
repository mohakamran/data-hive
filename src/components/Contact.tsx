import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setAlert({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 30 }} />,
      title: 'Email',
      content: 'hello@datahive.io',
      link: 'mailto:hello@datahive.io',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 30 }} />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 30 }} />,
      title: 'Office',
      content: '123 Tech Street, San Francisco, CA 94107',
      link: '#',
    },
  ];

  return (
    <Box sx={{ py: 12, background: '#ffffff' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            Get In Touch
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 8,
              fontSize: '1.25rem',
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </Typography>
        </motion.div>
        
        <Grid container spacing={6}>
          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box>
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    component="a"
                    href={info.link}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      mb: 4,
                      p: 3,
                      borderRadius: 2,
                      background: 'rgba(125, 211, 201, 0.05)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(125, 211, 201, 0.1)',
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: '#7dd3c9',
                        mt: 0.5,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 0.5,
                          fontWeight: 600,
                          color: 'text.primary',
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                        }}
                      >
                        {info.content}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>
          
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  background: 'linear-gradient(135deg, rgba(199,249,255,0.3) 0%, rgba(216,248,232,0.3) 100%)',
                  p: 4,
                  borderRadius: 3,
                }}
              >
                {alert && (
                  <Alert
                    severity={alert.type}
                    onClose={() => setAlert(null)}
                    sx={{ mb: 3 }}
                  >
                    {alert.message}
                  </Alert>
                )}
                
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Your Name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          background: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(125, 211, 201, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#7dd3c9',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#7dd3c9',
                          },
                        },
                      }}
                    />
                  </Grid>
                  
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Your Email"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          background: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(125, 211, 201, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#7dd3c9',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#7dd3c9',
                          },
                        },
                      }}
                    />
                  </Grid>
                  
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      name="subject"
                      label="Subject"
                      variant="outlined"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          background: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(125, 211, 201, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#7dd3c9',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#7dd3c9',
                          },
                        },
                      }}
                    />
                  </Grid>
                  
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          background: '#fff',
                          '& fieldset': {
                            borderColor: 'rgba(125, 211, 201, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#7dd3c9',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#7dd3c9',
                          },
                        },
                      }}
                    />
                  </Grid>
                  
                  <Grid size={12}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        endIcon={<SendIcon />}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          fontSize: '1rem',
                          fontWeight: 600,
                          background: 'linear-gradient(135deg, #7dd3c9 0%, #5db5ac 100%)',
                          boxShadow: '0 8px 24px rgba(125, 211, 201, 0.3)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #6dc5bb 0%, #4da59c 100%)',
                            boxShadow: '0 12px 32px rgba(125, 211, 201, 0.4)',
                          },
                        }}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </motion.div>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;

