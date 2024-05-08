import styled, { keyframes } from "styled-components";
import { IoMdClose } from "react-icons/io";

const showBackdrop = keyframes`
0% {
  opacity: 0;
}

100% {
opacity: 1;
}`;

export const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.7);
  animation: ${showBackdrop} 0.5s ease-out;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const ModalWrapper = styled.div`
  position: relative;
  overflow: ${(p) => (p.overflow ? p.overflow : "hidden")};
  height: 600px;
  max-width: 982px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;

  background-color: #fff;
  border-radius: 20px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    height: 50px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background: #d9d9d9;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #d9d9d9;
  }
`;

export const IconClose = styled(IoMdClose)`
  position: absolute;
  top: 34px;
  right: 24px;
  width: 32px;
  height: 32px;
  color: #101828;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    color: #e44848;
  }
`;
