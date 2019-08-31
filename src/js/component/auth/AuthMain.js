import { Link as RouterLink } from 'react-router-dom';
import React from 'react'
import { Container, Grid, Hidden, Typography } from '@material-ui/core'
import { MustardButton, GreenButton } from '../CustomizedUI/Button'
import MainTitle from './MainTitle';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    typography: {
        marginBottom: theme.spacing(1),
    }
}))

function Footer() {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <GreenButton fullWidth component={Link} to="/signup" >CREATE ACCOUNT</GreenButton>
                </Grid>
                <Grid item xs={12}>
                    <MustardButton fullWidth component={Link} to="/login">SIGN IN</MustardButton>
                </Grid>
            </Grid>
        </Container>
    )
}

function MobileDisplay() {
    const classes = useStyle()
    return (
        <Container maxWidth="md" className={classes.root}>
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
                <Hidden mdUp>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Hidden>
            </Grid>
        </Container>
    )
}

function AuthMain() {
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12} md={5}>
                    <MobileDisplay />
                </Grid>
                <Hidden smDown>
                    <Grid item md={7}
                        align="center"
                        style={{
                            backgroundColor: 'white',
                            margin: 0,
                            minHeight: '100vh',
                            paddingTop: '40vh'
                        }}>
                        <Footer />
                    </Grid>
                </Hidden>
            </Grid>
        </React.Fragment>
    )
}


export default AuthMain