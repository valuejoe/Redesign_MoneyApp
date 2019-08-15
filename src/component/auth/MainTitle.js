import React from 'react'
import Coins from '../../svg/coins.svg'
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    title: {
        fontWeight: 'bold',
        color: '#7A7474',
        marginBottom: theme.spacing(2),
    },

}))

export default function MainTitle() {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Grid align="center">
                <Typography variant="h3" component="h2" className={classes.title} >Money</Typography>
                <Coins width="70%" />
            </Grid>
        </React.Fragment>
    )
}
