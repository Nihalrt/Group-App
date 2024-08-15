import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, IconButton, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Sidebar from '../components/Sidebar'; // Adjust the path as necessary
import Link from 'next/link'; // Import Link from Next.js


const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#f0f4f8' }}>
            <Sidebar isOpen={sidebarOpen} />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    transition: 'margin 0.3s ease',
                    marginLeft: sidebarOpen ? '240px' : '60px',
                }}
            >
                {/* Top Bar */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>Dashboard</Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            variant="outlined"
                            placeholder="Search..."
                            sx={{ mr: 2, width: 300 }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                sx: { borderRadius: '50px', backgroundColor: '#fff' },
                            }}
                        />
                        <IconButton sx={{ mr: 2 }}>
                            <NotificationsIcon sx={{ color: '#555' }} />
                        </IconButton>
                        <IconButton>
                            <AccountCircleIcon sx={{ color: '#555' }} />
                        </IconButton>
                    </Box>
                </Box>

                {/* Main Content */}
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={3}>
                        <Link href="./fall" passHref>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 2,
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: '#fff',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                <Typography variant="h6" gutterBottom>
                                    Fall
                                </Typography>
                                <Typography variant="body2">Details about Fall semester...</Typography>
                            </Paper>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 2,
                                background: 'linear-gradient(135deg, #42e695 0%, #3bb2b8 100%)',
                                color: '#fff',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #36d399 0%, #30a3ab 100%)',
                                    cursor: 'pointer',
                                },
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                Summer
                            </Typography>
                            <Typography variant="body2">Details about Summer semester...</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 2,
                                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                color: '#fff',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #f7797d 0%, #f06595 100%)',
                                    cursor: 'pointer',
                                },
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                Spring
                            </Typography>
                            <Typography variant="body2">Details about Spring semester...</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 2,
                                background: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
                                color: '#333',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #fdd182 0%, #c8f3f7 100%)',
                                    cursor: 'pointer',
                                },
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                Recent Notifications
                            </Typography>
                            <Typography variant="body2">Recent chat notifications...</Typography>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Optional Content at the Bottom */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" sx={{ color: '#333' }}>Additional Insights</Typography>
                    {/* Add any additional content you'd like to display here */}
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
