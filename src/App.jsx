import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import Profile from './pages/Profile';
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/library" element={<Library />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
