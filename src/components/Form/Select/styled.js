import styledCmp from 'styled-components'

import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';

export const MaterialSelect = styled(Select)(({ theme, ...props }) => ({
  height: props.small && '40px',
  background: theme.palette.colors.backgroundgrey
}));
