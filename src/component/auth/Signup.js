import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Typography, Hidden, Link, InputAdornment } from '@material-ui/core';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import LockIcon from '@material-ui/icons/LockOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';
import { makeStyles } from '@material-ui/core/styles';
import SecondTitle from './SecondTitle';
import { GreenButton } from '../CustomizedUI/Button';
import { SecondTextField } from '../CustomizedUI/Textfield';

const useStyle = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        backgroundColor: '#DFA47C',
        height: '100vh',
        overflow: 'auto',
    },
    typography: {
        marginBottom: theme.spacing(1),
    },
    'input': {
        color: 'white',
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            fontWeight: 'bold',
            color: '#F1F5ED',
        }
    },
}))

function Footer() {
    const classes = useStyle()
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} align="center">
                    <SecondTextField
                        variant="outlined"
                        fullWidth
                        placeholder="Username"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon style={{ color: '#F1F5ED' }} />
                                </InputAdornment>
                            ),
                            classes: { input: classes.input }
                        }}
                    />
                </Grid>
                <Grid item xs={12} align="center">
                    <SecondTextField
                        variant="outlined"
                        fullWidth
                        placeholder="Email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailIcon style={{ color: '#F1F5ED' }} />
                                </InputAdornment>
                            ),
                            classes: { input: classes.input }
                        }}
                    />
                </Grid>
                <Grid item xs={12} align="center">
                    <SecondTextField
                        variant="outlined"
                        fullWidth
                        placeholder="Password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon style={{ color: '#F1F5ED' }} />
                                </InputAdornment>
                            ),
                            classes: { input: classes.input }
                        }}
                    />
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography className={classes.typography}>
                        <Link component={RouterLink} to="/login" style={{ color: '#F1F5ED' }}>
                            Already Have an Account ?
                        </Link>
                    </Typography>
                    <GreenButton fullWidth>SUBMIT</GreenButton>
                </Grid>
            </Grid>
        </Container>
    )
}

function MobileDisplay() {
    const classes = useStyle()
    return (
        <Container className={classes.root}>
            <Grid
                container
                spacing={6}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={12}>
                    <SecondTitle />
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
function Signup() {
    return (
        <div>
            <MobileDisplay />
        </div>
    )
}

export default Signup