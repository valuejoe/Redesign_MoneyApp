import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Typography, Hidden, Link, InputAdornment, TextField, Fade } from '@material-ui/core';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import LockIcon from '@material-ui/icons/LockOutlined';
import MainTitle from './MainTitle';
import { MustardButton } from '../CustomizedUI/Button';
import UIstyle from './UIstyle';
import GridColumnCenter from './GridColumnCenter'

function Main() {
    const { blackInput, typography } = UIstyle()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`submit: {email: ${email}, password: ${password}}`)
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} align="center">
                        <TextField
                            type="email"
                            variant="outlined"
                            fullWidth
                            placeholder="Email"
                            className={blackInput}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailIcon style={{ color: '#7A7474' }} />
                                    </InputAdornment>
                                ),

                            }}
                        />
                    </Grid>
                    <Grid item xs={12} align="center">
                        <TextField
                            type="password"
                            variant="outlined"
                            fullWidth
                            placeholder="Password"
                            className={blackInput}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon style={{ color: '#7A7474' }} />
                                    </InputAdornment>
                                ),

                            }}
                        />
                    </Grid>
                    <Grid item xs={12} align="center">
                        <Typography className={typography}>
                            <Link component={RouterLink} to="/signup" color="textSecondary">
                                Don't Have an Account ?
                        </Link>
                        </Typography>
                        <MustardButton fullWidth type="submit">Go</MustardButton>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

function Login() {
    return (
        <React.Fragment>
            <Fade in={true}>
                <Grid container>
                    <Grid item xs={12} md={5} className={UIstyle().root} style={{ backgroundColor: '#F1F5ED', }}>
                        <GridColumnCenter>
                            <Grid item xs={12}>
                                <MainTitle />
                            </Grid>
                            <Hidden mdUp>
                                <Grid item xs={12}>
                                    <Main />
                                </Grid>
                            </Hidden>
                        </GridColumnCenter>
                    </Grid>
                    <Hidden smDown>
                        <Grid item md={7} style={{ backgroundColor: 'white' }}>
                            <GridColumnCenter>
                                <Main />
                            </GridColumnCenter>
                        </Grid>
                    </Hidden>
                </Grid>
            </Fade>

        </React.Fragment>
    )
}

export default Login