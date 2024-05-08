import { useContext, useEffect } from "react";
import { ModalContext } from "../../context/ModalContext/ModalContext";
import { BackdropWrapper, IconClose, ModalWrapper } from "./ModalAdverts.styled";


export const ModalAdverts = ({ children, inOverflow }) => {
    const { closeModal } = useContext(ModalContext);
    useEffect(() => {
      const handleEscapeKey = event => {
        if (event.key === 'Escape') {
          closeModal();
        }
      };
  
      document.addEventListener('keydown', handleEscapeKey);
  
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }, [closeModal]);
  
    const handleClick = event => {
      if (event.target.id === 'close') {
        closeModal();
      }
    };
  
    return (
      <>
        <BackdropWrapper id="close" onClick={handleClick}>
          <ModalWrapper overflow={inOverflow}>
           <IconClose id="close" onClick={handleClick}/>
            {children}
          </ModalWrapper>
        </BackdropWrapper>
      </>
    );
}


