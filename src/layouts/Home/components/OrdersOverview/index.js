import React from 'react';
import { Box, Typography, Paper, Button, Divider, Chip, Avatar, Grid } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const orders = [
  {
    id: 'ORD-1001',
    product: 'Wireless Headphones',
    date: '2024-06-01',
    status: 'Shipped',
    statusColor: 'info',
    avatar: <ShoppingCartIcon />,
    details: 'Noise-cancelling, 40h battery life',
  },
  {
    id: 'ORD-1002',
    product: 'Smart Watch',
    date: '2024-06-03',
    status: 'Processing',
    statusColor: 'warning',
    avatar: <AccessTimeIcon />,
    details: 'Heart rate, GPS, 7-day battery',
  },
  {
    id: 'ORD-1003',
    product: 'Bluetooth Speaker',
    date: '2024-06-05',
    status: 'Delivered',
    statusColor: 'success',
    avatar: <CheckCircleIcon />,
    details: 'Waterproof, 24h playtime',
  },
];

const OrdersOverview = () => (
  <Box
    sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #43cea2 0%, #764ba2 100%)',
      py: 6,
      px: { xs: 2, md: 8 },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'white', mb: 4, letterSpacing: 1 }}>
      My Orders
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {orders.map((order) => (
        <Grid item xs={12} md={6} lg={4} key={order.id}>
          <Paper
            elevation={8}
            sx={{
              borderRadius: 4,
              p: 3,
              minWidth: 320,
              background: 'rgba(255,255,255,0.97)',
              boxShadow: '0 8px 32px rgba(67,206,162,0.13)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.03)', boxShadow: '0 16px 48px #764ba244' },
            }}
          >
            <Avatar sx={{ bgcolor: 'primary.main', width: 64, height: 64, mb: 2 }}>
              {order.avatar}
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              {order.product}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {order.details}
            </Typography>
            <Chip
              label={order.status}
              color={order.statusColor}
              icon={order.status === 'Delivered' ? <CheckCircleIcon /> : order.status === 'Shipped' ? <LocalShippingIcon /> : <AccessTimeIcon />}
              sx={{ mb: 2, fontWeight: 'bold', fontSize: 16, px: 2, py: 1, borderRadius: 2 }}
            />
            <Divider sx={{ width: '100%', my: 2 }} />
            <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardIosIcon />}
                sx={{ borderRadius: 2, fontWeight: 'bold', px: 3 }}
                href={`#/orders/${order.id}`}
              >
                View Details
              </Button>
              <Button
                variant="outlined"
          color="info"
                endIcon={<LocalShippingIcon />}
                sx={{ borderRadius: 2, fontWeight: 'bold', px: 3 }}
                href={`#/orders/${order.id}/track`}
              >
                Track Order
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                endIcon={<SupportAgentIcon />}
                sx={{ borderRadius: 2, fontWeight: 'bold', px: 3 }}
                href="#contact-support"
              >
                Contact Support
              </Button>
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2 }}>
              Order ID: {order.id} &nbsp;|&nbsp; Placed on: {order.date}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default OrdersOverview;
