import React from 'react';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

export const MustardButton = withStyles((theme) => {
    return ({
        root: {
            color: "#F1F5ED",
            backgroundColor: "#e8cc5c",
            '&:hover': {
                backgroundColor: "#b39b2b",
            },
            borderRadius: "40px",
            padding: theme.spacing(2),
            fontSize: "20px",
            fontWeight: "bold",
            minWidth: "300px",
        },
    })
})(Button)

export const GreenButton = withStyles((theme) => {
    return ({
        root: {
            color: "#F1F5ED",
            backgroundColor: "#6AB176",
            '&:hover': {
                backgroundColor: "#3a814a",
            },
            borderRadius: "40px",
            padding: theme.spacing(2),
            fontSize: "20px",
            fontWeight: "bold",
            minWidth: "300px",
        },
    })
})(Button)
