import { Container } from '@material-ui/core';
import React from 'react';
import Home from './pages/Home';

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
    },
};

export default function App() {
    return (
        <Container maxWidth="sm" style={styles.container}>
            <Home />
        </Container>
    );
}
