import styledCmp from "styled-components";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export const MaterialSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "transparent",
  "& .MuiSelect-select": {
    padding: "8px",
    color: theme.palette.colors.white,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },

  "& .MuiSelect-icon": {
    display: "none",
  },
  "& .MuiSelect-select:focus": {
    backgroundColor: "transparent",
  },
}));

export const MaterialInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.colors.white,

}));


export const StyledSelectWrapper = styledCmp.div`
  display: flex;
  align-items: center;
  background-color: ${({ background, theme }) => theme.palette.status?.[background] || 'transparent'};
  overflow: hidden;
  color: #fff;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  width: 155px;
`;

export const IconContainer = styledCmp.div.attrs({})`
    border-radius: 0 4px 4px 0;
    background-color: #e0e0e0;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;