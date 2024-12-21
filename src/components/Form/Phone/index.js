import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Label } from "reactstrap";
import styled from "styled-components";
import { theme } from "ui/theme-color";

const StyledPhoneInput = styled.div`
  margin-top: 16px;
.react-tel-input .form-control {
  width: 100%;
    &:focus {
      outline: none;
      box-shadow: none; 
    }
  }
`;

const PhoneInputComponent = ({ onChange, value }) => {
  return (
    <StyledPhoneInput>
      <Label for="phone" className="noPadding">
        Phone number*
      </Label>
      <PhoneInput
        country={"us"}
        value={value}
        onChange={onChange}
        inputStyle={{
          width: "100%",
          height: "48px",
          backgroundColor: theme.palette.colors.backgroundgrey,
          border: "none",
        }}
        buttonStyle={{
          border: "none",
          backgroundColor: theme.palette.colors.backgroundgrey,
        }}
      />
    </StyledPhoneInput>
  );
};

export default PhoneInputComponent;