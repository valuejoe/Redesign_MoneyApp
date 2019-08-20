import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

export const ValidationTextField = withStyles((theme) => {
    return ({
        root: {
            '& fieldset': {
                borderColor: '#7A7474',
                borderRadius: '40px',
            },

        },
    })
})(TextField);