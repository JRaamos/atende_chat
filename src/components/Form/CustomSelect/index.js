import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import { IconContainer, MaterialInputLabel, MaterialSelect, StyledMaterialSelect, StyledSelectWrapper } from "./styled";
import { Icon } from "ui/styled";


export const CustomSelect = ({ placeholder, options, value, onChange, secondary, id, }) => {
    const [opened, setOpened] = useState(false);
    const [color, setColor] = useState("lightgrey");

    const toggleOpen = () => {
        setOpened(!opened);
    };

    const handleClose = () => {
        setOpened(false);
    };

    const handleOpen = () => {
        setOpened(true);
    };

    const optionAction = (event) => {
        if (onChange && typeof onChange === "function") {
            onChange(event.target.value);
            setColor(selectColors(event.target.value));
        }
        toggleOpen();
    };

    const selectColors = (e) => {
        switch (e) {
            case "New lead":
                return "red";
            case "Contacted":
                return "orange";
            case "Completed":
                return "green";
            default:
                return "lightgrey";
        }
    }

    useEffect(() => {
        setColor(selectColors(value));
    }, []);

    return (
        <StyledSelectWrapper background={color}>
            <FormControl size="small" fullWidth margin="none" >
                <MaterialInputLabel id={id} color={secondary ? "secondary" : "primary"}>
                    {placeholder}
                </MaterialInputLabel>
                <MaterialSelect
                    id={`select-${id}`}
                    value={value}
                    onChange={optionAction}
                    labelId={id}
                    disableUnderline
                    label={placeholder}
                    displayEmpty
                    open={opened}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    color={secondary ? 'secondary' : 'primary'}

                >
                    {options.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                            {item.title}
                        </MenuItem>
                    ))}
                </MaterialSelect>
            </FormControl>
            <IconContainer onClick={toggleOpen}>
                <Icon icon='chevron-down' />
            </IconContainer>
        </StyledSelectWrapper>
    );
};

CustomSelect.propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string,
};

CustomSelect.defaultProps = {
    placeholder: "",
    id: "custom-select",
};

export default CustomSelect;