import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

export const MainTextField = withStyles((theme) => {
    return ({
        root: {
            maxWidth: '400px',
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#7A7474',
                    borderRadius: '40px',
                    borderWidth: 3,
                },
                '&:hover fieldset': {
                    borderColor: '#4e4949',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#4e4949',
                    borderWidth: 3,
                },
            },
            '& input': {
                '&::placeholder': {
                    textOverflow: 'ellipsis !important',
                    fontWeight: 'bold',
                }
            },
        },
    })
})(TextField);


export const SecondTextField = withStyles((theme) => {
    return ({
        root: {
            maxWidth: '400px',
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#F1F5ED',
                    borderRadius: '40px',
                    borderWidth: 3,
                },
                '&:hover fieldset': {
                    borderColor: '#bec2bb',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#bec2bb',
                    borderWidth: 3,
                },
            },
            '& input': {
                color: 'white',
                '&::placeholder': {
                    textOverflow: 'ellipsis !important',
                    fontWeight: 'bold',
                    color: '#F1F5ED',
                }
            },
        },
    })
})(TextField);