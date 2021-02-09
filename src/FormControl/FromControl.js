import React from 'react';
import cls from './FormControl.module.css';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment'; 
import Tooltip from '@material-ui/core/Tooltip';
import FormHelperText from '@material-ui/core/FormHelperText';




export const InputPassword = ({ input, label, meta: { touched, error, invalid } }) => {
    const [ value, setValue ] = React.useState(false);
    
    const onSetValue = () => {
        setValue(!value)
    }

    return (
        <div className = { cls.formInput }>
            <OutlinedInput 
                className = { cls.input }
                placeholder = { label }
                error = { touched && invalid }
                type = { value ? 'text':'password' }
                fullWidth
                autoComplete = 'on'
                {...input}
                endAdornment = {
                    <Tooltip arrow title = { value ? 'Скрыть пароль':'Показать пароль'} placement = 'top' >
                        <InputAdornment position = "end">
                            <IconButton
                                aria-label = "toggle password visibility"
                                onClick = { onSetValue }>
                                { value ? <Visibility /> : <VisibilityOff/> }
                                

                            </IconButton>
                        </InputAdornment>
                    </Tooltip>
                }
            />
            { touched && error && <FormHelperText style = {{ color: '#FF564E',  marginLeft: '5px' }}> {error} </FormHelperText> }

        </div>
    )
}

export const InputText = ({ input, label, meta: { touched, error, invalid } }) => {
    return (
        <div className = { cls.formInput }>
            <OutlinedInput 
                error = { touched && invalid }
                className = { cls.input }
                placeholder = { label }
                type = 'text'
                fullWidth
                {...input}
            />   

            { touched && error && <FormHelperText style = {{ color: '#FF564E', marginLeft: '5px' }}> {error} </FormHelperText> }
        </div>
    )
}