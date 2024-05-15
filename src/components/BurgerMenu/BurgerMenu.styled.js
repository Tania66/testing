import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const moveCamperAnimation = keyframes`
from {
    transform: translateX(-500%);
    transform-origin:center;
}
to {
    transform: translateX(500%);
    transform-origin: center;
}
`;

export const MobileMenu = styled.div`
  display: none;
  position: relative;
  @media (min-width: 320px) and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease-in-out;
  }
`;

export const InnerBurgerMenu = styled.div`
  opacity: ${({ isOpen }) => (isOpen ? "0" : "6")};
  position: fixed;
  border-radius: 10px;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  visibility: ${({ isOpen }) => (isOpen ? "hidden" : "visible")};
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(-100%)" : "translateY(0)"};
  background-color: #f2f4f7;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  transition: transform 0.3s ease-out;
`;

export const BurgerContainer = styled.div`
  padding: 75px 15px 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const BurgerNavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const MobileLink = styled(NavLink)`
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

export const ButtonBurgerMenu = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  z-index: 10;
  top: 15px;
  right: -10px;
`;

export const ImgBurger = styled.img`
  animation: ${moveCamperAnimation} 4s infinite;
`;
