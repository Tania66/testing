import { createContext, useState } from 'react';
import { ModalAdverts } from '../../components/ModalAdverts/ModalAdverts';
import { GlobalStyle } from '../../styles/globalStyle';

export const ModalContext = createContext({
    openModal: () => {},
    closeModal: () => {},
  });

  export const ModalProvider = ({ children }) => {
    const [modalShowing, setModalShowing] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [overflow, setOverflow] = useState(null);


    const openModal = (modalConfig, inOverflow) => {
      setModalContent(modalConfig.props);
      setOverflow(inOverflow);
      setModalShowing(true);
    };
  
    const closeModal = () => {
      setModalShowing(false);
    };
  
    const valueModalProvider = {
      openModal,
      closeModal,
    };
  
    return (
      <ModalContext.Provider value={valueModalProvider}>
         <GlobalStyle $isVisibility={modalShowing ? 'hidden' : 'scroll'} />
          {modalShowing && (
            <ModalAdverts {...modalContent} inOverflow={overflow} />
          )}
          {children}
      </ModalContext.Provider>
    );
  };
  