import { Box, Container, Grid, Typography, Card, CardContent, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Dashboard,
  TrendingUp,
  CloudUpload,
  AutoAwesome,
  DataObject,
  SmartToy,
} from '@mui/icons-material';

const features = [
  {
    icon: <Dashboard sx={{ fontSize: 48 }} />,
    title: 'Interactive Dashboards',
    description: 'Create stunning, interactive dashboards that bring your data to life with drag-and-drop simplicity.',
    color: '#7dd3c9',
  },
  {
    icon: <TrendingUp sx={{ fontSize: 48 }} />,
    title: 'Predictive Analytics',
    description: 'Leverage AI-powered predictions to forecast trends and make data-driven decisions with confidence.',
    color: '#9ee0d9',
  },
  {
    icon: <CloudUpload sx={{ fontSize: 48 }} />,
    title: 'Cloud Integration',
    description: 'Seamlessly connect with AWS, Google Cloud, Azure, and more. Your data, your cloud.',
    color: '#C7F9FF',
  },
  {
    icon: <AutoAwesome sx={{ fontSize: 48 }} />,
    title: 'AI-Powered Insights',
    description: 'Get intelligent recommendations and insights automatically generated from your data patterns.',
    color: '#D8F8E8',
  },
  {
    icon: <DataObject sx={{ fontSize: 48 }} />,
    title: 'Multi-Format Support',
    description: 'Import and analyze data from CSV, JSON, Excel, SQL databases, and over 50+ data sources.',
    color: '#7dd3c9',
  },
  {
    icon: <SmartToy sx={{ fontSize: 48 }} />,
    title: 'Smart Automation',
    description: 'Automate repetitive tasks and workflows. Set triggers, schedule reports, and never miss an update.',
    color: '#9ee0d9',
  },
];

const Features = () => {
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
            Powerful Features
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
            Everything you need to transform raw data into actionable business intelligence
          </Typography>
        </motion.div>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
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
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid rgba(125, 211, 201, 0.2)',
                    '&:hover': {
                      boxShadow: '0 12px 32px rgba(125, 211, 201, 0.15)',
                      border: `1px solid ${feature.color}`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        borderRadius: 2,
                        mb: 2,
                        background: `linear-gradient(135deg, ${feature.color}15, ${alpha(feature.color, 0.3)})`,
                      }}
                    >
                      <Box sx={{ color: feature.color }}>{feature.icon}</Box>
                    </Box>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {feature.description}
                    </Typography>
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

export default Features;

