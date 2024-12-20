import React, { useState } from "react";  
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import {   
    MaterialInput
} from "./styled"; 

import CurrencyFormat from "react-currency-format";
 
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment'; 
import FormControl from '@mui/material/FormControl';  

import { ThemedComponent } from "ui/theme";


export const Input = (props) => { 
    const [visible, setVisible] = useState(false) 

    const handleClickShowPassword = () => {
        setVisible(!visible);
    };

    const handleMouseDown = (event) => {
        event.preventDefault();
    }; 

    return ( 
        <>  
            <ThemedComponent>
                {/* standard | outlined | filled */}
                <FormControl fullWidth variant={"standard"}>
                    <InputLabel htmlFor={props.id}
                        color={ props.secondary ? 'secondary' : 'primary' } >{ props.placeholder }</InputLabel>
                        <MaterialInput
                            id={props.id}
                            type={ props.type === 'password' ? visible ? 'text' : 'password' : props.type }
                            value={props.value}
                            onChange={props.onChange}
                            onKeyDown={ ev => typeof props.onSubmitEditing === 'function' ? ( ev.keyCode === 13 ? props.onSubmitEditing() : null ) : props.onKeyDown }
                            disabled={props.disabled}
                            color={ props.secondary ? 'secondary' : 'primary' }
                            endAdornment={ props.type === 'password' || props.icon ?
                                    <InputAdornment position="end"> 
                                        {
                                            props.type === 'password' ?  
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDown} >
                                                    { visible ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            : null
                                        }  
                                    </InputAdornment>
                                : null 
                            }
                        />
                </FormControl>
            </ThemedComponent> 
        </>
    );
}

export const MaskedInput = (props) => (
    <InputMask mask={props.mask} value={props.value} disabled={false} placeholder={props.placeholder} onChange={props.onChange} maskChar="">
      {(inputProps) => <Input {...inputProps} type="tel" value={null} onChange={null} /> }
    </InputMask>
);

export const CurrencyInput = ({ value, onChange, ...props }) => (
    <CurrencyFormat
      {...props}
      value={value}
      onValueChange={ (values) => onChange({ target:{ value:values.floatValue } }) }      
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      customInput={Input}
    />
);

MaskedInput.propTypes = { 
    type: PropTypes.oneOf(['password', 'text']),  
    label: PropTypes.string, 
    placeholder: PropTypes.string, 
    value: PropTypes.string.isRequired, 
    secondary: PropTypes.bool, 
    onSubmitEditing: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    mask: PropTypes.string.isRequired
};


MaskedInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    value: '',  
    secondary: false,
    onSubmitEditing: undefined,
    onChange: undefined,
    mask: ''
};

Input.propTypes = { 
    type: PropTypes.oneOf(['password', 'text']),  
    label: PropTypes.string, 
    placeholder: PropTypes.string, 
    value: PropTypes.string.isRequired, 
    secondary: PropTypes.bool, 
    disabled: PropTypes.bool, 
    onSubmitEditing: PropTypes.func,
    onChange: PropTypes.func.isRequired,
};


Input.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    value: '',  
    secondary: false,
    disabled: false,
    onSubmitEditing: undefined,
    onChange: undefined,
};

export default Input; 