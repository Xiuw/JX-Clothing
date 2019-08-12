import styled, { css } from "styled-components";

const getButton = props => {
  if (props.isGoogleSignIn) {
    return googleButton;
  }
  return props.inverted ? invertedButton : buttonStyle;
};

const buttonStyle = css`
  background-color: black;
  border: none;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const invertedButton = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background: black;
    color: white;
    border: none;
  }
`;

const googleButton = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const AllButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  min-width: 150px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;

  ${getButton}
`;
