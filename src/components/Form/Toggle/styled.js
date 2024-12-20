import styledCmp from 'styled-components'

import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';

import Switch from '@mui/material/Switch';
// font - family: Urbanist;
// font - size: 18px;
// font - weight: 600;
// line - height: 27px;
// text - align: left;
// text - underline - position: from - font;
// text - decoration - skip - ink: none;

export const MaterialSwitch = styled(Switch)(({ theme }) => ({
  marginLeft: '-10px',
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontFamily: 'Urbanist',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '27px',
    textAlign: 'left',
    textDecoration: 'none',
  },
}));