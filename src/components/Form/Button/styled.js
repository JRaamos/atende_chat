import styledCmp from 'styled-components'
import ReactLoading from 'react-loading'

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const Load = styledCmp(ReactLoading).attrs(props => ({
    type: 'spin',
    color: props.theme.palette[props.theme.palette[props?.color] ? props?.color : "primary"]?.[props.outline ? "main" : "contrastText"],
    height: 20,
    width: 20
}))`
`;
// font - family: Plus Jakarta Sans;
// font - size: 16px;
// font - weight: 500;
// line - height: 20.16px;
// text - align: center;
// text - underline - position: from - font;
// text - decoration - skip - ink: none;

export const ColorButton = styled(Button)(({ theme, nospace, between, start, small, border, width, radius }) => ({
    width: width ? width : '100%',
    minHeight: small ? 40 : 48,
    marginTop: nospace ? '0px' : '16px',
    padding: small ? '4px 12px' : '12px 24px',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 500,
    fontFamily: 'Plus Jakarta Sans',
    display: 'flex',
    justifyContent: between ? 'space-between' : start ? 'flex-start' : 'center',
    border: border && '1px solid',
    boxShadow: 'none',
    borderRadius: radius && radius,
    whiteSpace: 'nowrap',

}));