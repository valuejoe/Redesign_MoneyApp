import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { MustardButton, GreenButton } from '../CustomizedUI/Button'
import MainTitle from './MainTitle';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <GreenButton fullWidth >CREATE ACCOUNT</GreenButton>
            </Grid>
            <Grid item xs={12}>
                <MustardButton fullWidth component={Link} to='login'>SIGN IN</MustardButton>
            </Grid>
        </Grid>
    )
}

const AuthMain = () => {
    return (
        <div>
            <Container maxWidth="xs">
                <Grid
                    container
                    spacing={6}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={12}>
                        <MainTitle />
                    </Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default AuthMain