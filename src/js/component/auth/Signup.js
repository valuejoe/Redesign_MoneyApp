import React, { Component, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Typography, Hidden, Link, InputAdornment, TextField } from '@material-ui/core';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import LockIcon from '@material-ui/icons/LockOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';
import { makeStyles } from '@material-ui/core/styles';
import SecondTitle from './SecondTitle';
import { GreenButton } from '../CustomizedUI/Button';
import { SecondTextField, MainTextField } from '../CustomizedUI/Textfield';

const useStyle = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),

        height: '100vh',
        overflow: 'auto',
    },
    typography: {
        marginBottom: theme.spacing(1),
    },
}))

const InputUI = ({ placeholder, color, children }) => {
    return (
        <React.Fragment>
            {color === "white" && (
                <SecondTextField
                    variant="outlined"
                    fullWidth
                    placeholder={placeholder}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {children}
                            </InputAdornment>
                        ),
                    }}
                />
            )}
            {color === "black" && (
                <MainTextField
                    variant="outlined"
                    fullWidth
                    placeholder={placeholder}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {children}
                            </InputAdornment>
                        ),
                    }}
                />
            )}

        </React.Fragment>
    )
}

function Main(props) {
    let iconColor = { color: '#F1F5ED' }
    if (props.color === 'black') {
        iconColor = { color: '#7A7474' }
    }
    const classes = useStyle()

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} align="center">
                    <InputUI placeholder="Username" color={props.color}>
                        <PersonIcon style={iconColor} />
                    </InputUI>
                </Grid>
                <Grid item xs={12} align="center">
                    <InputUI placeholder="Mail" color={props.color}>
                        <MailIcon style={iconColor} />
                    </InputUI>
                </Grid>
                <Grid item xs={12} align="center">
                    <InputUI placeholder="Password" color={props.color}>
                        <LockIcon style={iconColor} />
                    </InputUI>
                </Grid>
                <Grid item xs={12} align="center">
                    <Typography className={classes.typography}>
                        <Link component={RouterLink} to="/login" style={iconColor}>
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
        <Container maxWidth="md" className={classes.root} style={{ backgroundColor: '#DFA47C', }}>
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
                        <Main color="white" />
                    </Grid>
                </Hidden>
            </Grid>
        </Container>
    )
}

function Signup() {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={5}>
                    <MobileDisplay />
                </Grid>
                <Hidden smDown>
                    <Grid item md={7}
                        style={{
                            backgroundColor: 'white',
                            margin: 0,
                            minHeight: '100vh',
                            paddingTop: '30vh'
                        }}>
                        <Main color="black" />
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    )
}

export default Signup