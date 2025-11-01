import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Check, Star } from '@mui/icons-material';

const plans = [
  {
    name: 'Starter',
    price: 29,
    period: 'month',
    description: 'Perfect for individuals and small teams',
    features: [
      'Up to 5 users',
      '10 GB data storage',
      'Basic dashboards',
      'Email support',
      'API access',
      'Mobile app',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: 99,
    period: 'month',
    description: 'Best for growing businesses',
    features: [
      'Up to 50 users',
      '500 GB data storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Advanced security',
      'Scheduled reports',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored for large organizations',
    features: [
      'Unlimited users',
      'Unlimited storage',
      'White-label solution',
      'Dedicated support',
      'Custom development',
      'Advanced compliance',
      'On-premise option',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <Box sx={{ py: 12, background: 'linear-gradient(180deg, #ffffff 0%, #f8fffe 100%)' }}>
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
            Choose Your Plan
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
            Flexible pricing options for teams of all sizes. Start free, upgrade anytime.
          </Typography>
        </motion.div>
        
        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    background: plan.popular
                      ? 'linear-gradient(135deg, #7dd3c9 0%, #5db5ac 100%)'
                      : 'rgba(255, 255, 255, 0.9)',
                    border: plan.popular ? 'none' : '1px solid rgba(125, 211, 201, 0.2)',
                    boxShadow: plan.popular
                      ? '0 12px 32px rgba(125, 211, 201, 0.3)'
                      : 'none',
                    '&:hover': {
                      boxShadow: plan.popular
                        ? '0 16px 40px rgba(125, 211, 201, 0.4)'
                        : '0 8px 24px rgba(125, 211, 201, 0.15)',
                    },
                    overflow: 'visible',
                  }}
                >
                  {plan.popular && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -15,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 2,
                        py: 0.5,
                        borderRadius: 2,
                        background: '#fff',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      }}
                    >
                      <Star sx={{ fontSize: 16, color: '#ffa726' }} />
                      <Typography variant="caption" sx={{ fontWeight: 600, color: '#7dd3c9' }}>
                        Most Popular
                      </Typography>
                    </Box>
                  )}
                  
                  <CardContent sx={{ p: 4, pt: plan.popular ? 6 : 4 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 1,
                        fontWeight: 700,
                        color: plan.popular ? '#fff' : 'text.primary',
                      }}
                    >
                      {plan.name}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        color: plan.popular ? 'rgba(255,255,255,0.9)' : 'text.secondary',
                      }}
                    >
                      {plan.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 4 }}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontWeight: 800,
                          color: plan.popular ? '#fff' : 'text.primary',
                        }}
                      >
                        {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                      </Typography>
                      {typeof plan.price === 'number' && (
                        <Typography
                          variant="body2"
                          sx={{
                            ml: 1,
                            color: plan.popular ? 'rgba(255,255,255,0.8)' : 'text.secondary',
                          }}
                        >
                          /{plan.period}
                        </Typography>
                      )}
                    </Box>
                    
                    <Box sx={{ mb: 4 }}>
                      {plan.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 1,
                            mb: 2,
                          }}
                        >
                          <Check
                            sx={{
                              fontSize: 20,
                              color: plan.popular ? '#fff' : '#7dd3c9',
                              flexShrink: 0,
                              mt: 0.25,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: plan.popular ? 'rgba(255,255,255,0.95)' : 'text.primary',
                              lineHeight: 1.6,
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    
                    <Button
                      variant={plan.popular ? 'contained' : 'outlined'}
                      fullWidth
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 600,
                        fontSize: '1rem',
                        ...(plan.popular
                          ? {
                              background: '#fff',
                              color: '#7dd3c9',
                              '&:hover': {
                                background: 'rgba(255,255,255,0.95)',
                              },
                            }
                          : {
                              borderColor: '#7dd3c9',
                              color: '#7dd3c9',
                              '&:hover': {
                                background: 'rgba(125, 211, 201, 0.1)',
                              },
                            }),
                      }}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

