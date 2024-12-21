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
  padding: '10px 12px',
  resize: 'none',
  border: 'none',
  '&:focus': {
    outline: 'none',
  },


}));

export const InputIcon = styledCmp.img.attrs({
})`
`;


export const StyledInputLabel = styled(InputLabel)(({ theme, grey, top }) => ({
  zIndex: 1,

  marginLeft: '10px',
  marginBottom: '20px',
  '&.MuiInputLabel-root + .MuiInput-root': {
    marginTop: '0',
  },
}));
