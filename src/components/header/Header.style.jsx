import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100px;
  padding: 25px;

  @media only screen and (max-width: 450px) {
    width: 70px;
    position: absolute;
    top: 5px;
    left: 5px;
  }
`;
export const LogoImg = styled.img`
  width: 70px;
  height: auto;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
