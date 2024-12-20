import styledCmp from 'styled-components'

import { styled } from '@mui/material/styles';
import Input from '@mui/material/Input'; // standard (material)
// import Input from '@mui/material/FilledInput'; 
// import Input from '@mui/material/OutlinedInput'; 
import InputLabel from '@mui/material/InputLabel';



export const MaterialInput = styled(Input)(({ theme, small, height, padding, transparent, noPadding, white }) => ({
  backgroundColor: transparent ? "transparent" : white ? theme.palette.colors.white : theme.palette.colors.backgroundgrey,
  height: small ? 40 : height ? height : 48,
  borderRadius: 4,
  padding: padding ? '8px' : noPadding ? '0px' : '0 8px',
  resize: 'none',
  border: 'none',
  marginTop: padding && '16px',
  '&:focus': {
    outline: 'none',
  },


}));

export const InputIcon = styledCmp.img.attrs({
})`
`;


export const StyledInputLabel = styled(InputLabel)(({ theme, grey, top }) => ({

  color: theme.palette.colors.lightgrey,
  marginTop: '0',
  fontFamily: 'Sora',
  fontWeight: '400',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  '&.MuiInputLabel-shrink': {
    transform: 'translateY(-10px)'
  },
}));
