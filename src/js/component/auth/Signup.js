import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Typography, Hidden, Link, InputAdornment, TextField, Fade } from '@material-ui/core';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import LockIcon from '@material-ui/icons/LockOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';
import UIstyle from './UIstyle';
import { GreenButton } from '../CustomizedUI/Button';
import SecondTitle from './SecondTitle';
import GridColumnCenter from './GridColumnCenter'

function Main({ color }) {
    let iconColor = { color: '#7A7474' }
    if (color === 'white') {
        iconColor = { color: '#F1F5ED' }
    }
    const { blackInput, whiteInput, typography } = UIstyle()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username)
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} align="center">
                        <TextField
                            type="text"
                            variant="outlined"
                            fullWidth
                            placeholder="Username"
                            className={color === 'white' ? whiteInput : blackInput}
                            onChange={(e) => setUsername(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon style={iconColor} />
                                    </InputAdornment>
                                ),

                            }}
                        />
                    </Grid>
                    <Grid item xs={12} align="center">
                        <TextField
                            type="email"
                            variant="outlined"
                            fullWidth
                            placeholder="Email"
                            className={color === 'white' ? whiteInput : blackInput}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailIcon style={iconColor} />
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
                            className={color === 'white' ? whiteInput : blackInput}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon style={iconColor} />
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
                            placeholder="Confirm Password"
                            className={color === 'white' ? whiteInput : blackInput}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon style={iconColor} />
                                    </InputAdornment>
                                ),

                            }}
                        />
                    </Grid>
                    <Grid item xs={12} align="center">
                        <Typography className={typography}>
                            <Link component={RouterLink} to="/login" style={iconColor}>
                                Already Have an Account ?
                        </Link>
                        </Typography>
                        <GreenButton fullWidth type="submit">SUBMIT</GreenButton>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

function Signup() {
    return (
        <Fade in={true}>
            <Grid container>
                <Grid item xs={12} md={5} className={UIstyle().root} style={{ backgroundColor: '#DFA47C', }}>
                    <GridColumnCenter>
                        <Grid item xs={12}>
                            <SecondTitle />
                        </Grid>
                        <Hidden mdUp>
                            <Grid item xs={12}>
                                <Main color="white" />
                            </Grid>
                        </Hidden>
                    </GridColumnCenter>
                </Grid>
                <Hidden smDown>
                    <Grid item md={7}
                        style={{
                            backgroundColor: 'white',
                        }}>
                        <GridColumnCenter>
                            <Main />
                        </GridColumnCenter>
                    </Grid>
                </Hidden>
            </Grid>
        </Fade>
    )
}

export default Signup