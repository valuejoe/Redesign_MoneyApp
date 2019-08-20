import React from 'react';
import { Container, Grid, TextField, Hidden } from '@material-ui/core';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';
import MainTitle from './MainTitle';
import { MustardButton } from '../CustomizedUI/Button';
import { ValidationTextField } from '../CustomizedUI/Textfield';

const useStyle = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
}))

function Footer() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <ValidationTextField
                    variant="outlined"
                    fullWidth
                    label="Email"
                />
            </Grid>
            <Grid item xs={12}>
                <ValidationTextField
                    variant="outlined"
                    fullWidth
                    label="Password"
                />
            </Grid>
            <Grid item xs={12}>
                <MustardButton fullWidth>Go</MustardButton>
            </Grid>
        </Grid>
    )
}

function MobileDisplay() {
    const classes = useStyle()
    return (
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
    )
}

export default function Login() {
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12} md={5}>
                    <MobileDisplay />
                </Grid>
                <Hidden smDown>
                    <Grid item md={7} style={{ backgroundColor: 'white', margin: 0, height: '100vh' }}>
                        <div> 123</div>
                    </Grid>
                </Hidden>
            </Grid>
        </React.Fragment>

    )
}
