import React from 'react';
import { Container, Grid, TextField, InputAdornment } from '@material-ui/core';
import MailIcon from '@material-ui/icons/MailOutlineOutlined'
import { makeStyles } from '@material-ui/core/styles'
import MainTitle from './MainTitle';
import { MustardButton } from '../CustomizedUI/Button';
import { textAlign, border } from '@material-ui/system';

const useStyle = makeStyles(theme => ({
    TextField: {
        color: 'black',
        border: '5px',
    },
    input: {
        color: 'green',
    }
}))



function Footer() {
    const classes = useStyle()
    const inputProps = {
        fontSize: '50px'
    };
    return (
        <Grid container>
            <Grid item xs={12}>
                <TextField
                    id="filled-adornment-password"
                    placeholder="Email"
                    variant="outlined"
                    type="text"
                    className={classes.TextField}
                    InputProps={{
                        className: classes.input,
                    }}

                />
            </Grid>
            <Grid item>
                <MustardButton>Go</MustardButton>
            </Grid>
        </Grid>
    )
}

export default function Login() {
    return (
        <div>
            <Container maxWidth="xs">
                <Grid
                    container
                    spacing={8}
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
