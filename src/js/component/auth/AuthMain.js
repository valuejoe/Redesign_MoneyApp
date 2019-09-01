import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Grid, Hidden } from '@material-ui/core'
import UIstyle from './UIstyle';
import { MustardButton, GreenButton } from '../CustomizedUI/Button'
import MainTitle from './MainTitle';
import GridColumnCenter from './GridColumnCenter';

function Main() {
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

function AuthMain() {
    return (
        <React.Fragment>
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
                    <Grid item md={7}
                        align="center"
                        style={{ backgroundColor: 'white' }}>
                        <GridColumnCenter>
                            <Main />
                        </GridColumnCenter>
                    </Grid>
                </Hidden>
            </Grid>
        </React.Fragment>
    )
}


export default AuthMain