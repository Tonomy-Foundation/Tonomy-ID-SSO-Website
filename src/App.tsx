import { Container } from '@mui/material';
import React from 'react';
import Home from './pages/Home';
import New from './pages/New';

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        padding: '32px',
    },
};

export default function App() {
    return (
        <Container maxWidth="sm" style={styles.container}>
            <New></New>
        </Container>
    );
}
