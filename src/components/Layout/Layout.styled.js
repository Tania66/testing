import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  padding: 0 54px;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 15px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

export const HeaderLink = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
  padding: 10px 15px;
  color: #101828;
  &.active {
    color: #fff;
    padding: 10px 15px;
    border-radius: 200px;
    background: #d84343;
  }
`;
