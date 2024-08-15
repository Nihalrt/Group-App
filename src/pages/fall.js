// pages/fall.js
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import Sidebar from '../components/Sidebar'; // Adjust the path if necessary
import axios from 'axios';
import Link from "next/link";

const fall = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch Fall courses from the backend
        const fetchCourses = async () => {
            try {
                const response = await axios.get('./api/Course');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#f0f4f8' }}>
            <Sidebar isOpen={true} />  {/* Sidebar should always be open */}
            <Box component="main" sx={{flexGrow: 1, p: 3, marginLeft: '240px'}}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}>
                    Fall Courses
                </Typography>

                <Grid container spacing={3}>
                    {courses.map((course) => (
                        <Grid item xs={12} sm={6} md={4} key={course._id}>
                            <Link href={`/courses/${course._id}`} passHref> {/* Make the course clickable */}
                                <Paper elevation={3} sx={{
                                        p: 2,
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        color: '#fff',
                                        cursor: 'pointer', // Change cursor to pointer on hover
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)', // Change background on hover
                                            transform: 'scale(1.05)', // Slightly scale up the component
                                            transition: 'transform 0.3s ease-in-out', // Smooth transition
                                        },
                                    }}
                                >
                                    <Typography variant="h6" gutterBottom>
                                        {course.name}
                                    </Typography>
                                    <Typography variant="body2">
                                        {course.description}
                                    </Typography>
                                </Paper>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default fall;
