import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Typography, Hidden, Link, InputAdornment } from '@material-ui/core';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import LockIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import MainTitle from './MainTitle';
import { MustardButton } from '../CustomizedUI/Button';
import { MainTextField } from '../CustomizedUI/Textfield';

const useStyle = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    typography: {
        marginBottom: theme.spacing(1),
    },
    'input': {
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            fontWeight: 'bold',
        }
    },
}))

function Footer() {
    const classes = useStyle()
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} align="center">
                    <MainTextField
                        variant="outlined"
                        fullWidth
                        placeholder="Email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailIcon style={{ color: '#7A7474' }} />
                                </InputAdornment>
                            ),
                            classes: { input: classes.input }
                        }}
                    />
                </Grid>
                <Grid item xs={12} align="center">
                    <MainTextField
                        variant="outlined"
                        fullWidth
                        placeholder="Password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon style={{ color: '#7A7474' }} />
                                </InputAdornment>
                            ),
                            classes: { input: classes.input }
                        }}
                    />
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography className={classes.typography}>
                        <Link component={RouterLink} to="/signup" color="textSecondary">
                            Don't Have an Account ?
                        </Link>
                    </Typography>
                    <MustardButton fullWidth>Go</MustardButton>
                </Grid>
            </Grid>
        </Container>
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
                    <Grid
                        item
                        md={7}
                        align="center"
                        style={{
                            backgroundColor: 'white',
                            margin: 0,
                            minHeight: '100vh',
                            paddingTop: '30vh'
                        }}
                    >
                        <Footer style={{ marginTop: '100px' }} />
                    </Grid>
                </Hidden>
            </Grid>
        </React.Fragment >

    )
}
