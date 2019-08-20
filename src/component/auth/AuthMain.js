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
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <GreenButton fullWidth component={Link} to="/signup" >CREATE ACCOUNT</GreenButton>
            </Grid>
            <Grid item xs={12}>
                <MustardButton fullWidth component={Link} to="/login">SIGN IN</MustardButton>
            </Grid>
        </Grid>
    )
}

function AuthMain() {
    const classes = useStyle()
    return (
        <div>
            <Container maxWidth="xs" className={classes.root}>
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
        </div>
    )
}



export default AuthMain