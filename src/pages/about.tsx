import Sidebar from '@/components/Sidebar';
import React from 'react';

const about = () => {
    return(
        <div className='container'>
            <Sidebar></Sidebar>
            <h1>About page</h1>
            <p>Welcome to the home page!</p>

        </div>
    );
};

export default about;