import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Typography, Hidden, Link, InputAdornment, TextField, Fade } from '@material-ui/core';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import LockIcon from '@material-ui/icons/LockOutlined';
import UIstyle from './UIstyle';
import { MustardButton } from '../CustomizedUI/Button';
import MainTitle from './MainTitle';
import GridColumnCenter from './GridColumnCenter'

function InputRow(props) {
    const { blackInput } = UIstyle()
    const handleChange = (e) => {
        props.onUsernameChange(e)
    }
    return (
        <TextField
            id={props.placeholder}
            type={props.type}
            variant="outlined"
            fullWidth
            placeholder={props.placeholder}
            className={blackInput}
            onChange={(e) => handleChange(e)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {props.icon}
                    </InputAdornment>
                ),
            }}
        />
    )
}

function Main() {
    const { typography } = UIstyle()

    const [userdata, setUserdata] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userdata)
    }

    const handleOnUsernameChange = (e) => {
        setUserdata({ ...userdata, [e.target.id]: e.target.value })
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} align="center">
                        <InputRow
                            icon={<MailIcon style={{ color: '#7A7474' }} />}
                            placeholder="Email"
                            type="email"
                            onUsernameChange={handleOnUsernameChange}
                        />
                    </Grid>
                    <Grid item xs={12} align="center">
                        <InputRow
                            icon={<LockIcon style={{ color: '#7A7474' }} />}
                            placeholder="Password"
                            type="password"
                            onUsernameChange={handleOnUsernameChange}
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