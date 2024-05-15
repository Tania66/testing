import React, { useEffect, useState } from 'react'
import logo from '../../assets/icon/camper.svg'
import { BurgerContainer, BurgerNavList, ButtonBurgerMenu,ImgBurger,InnerBurgerMenu, MobileLink, MobileMenu } from './BurgerMenu.styled';
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
const BurgerMenu = () => {
    const camper = logo;
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
      if (window.location !== location.pathname) {
        setIsOpen(false)
      }
    },[location.pathname])

  return (
    <MobileMenu>
        <ButtonBurgerMenu onClick={() => setIsOpen(!isOpen)}> 
     {isOpen ? (<IoClose size={25}/>) : (<CgMenuRightAlt size={25}/>)}  
        </ButtonBurgerMenu>
      <InnerBurgerMenu>
   {isOpen &&  (
    <BurgerContainer>
        <nav>
          <BurgerNavList>
            <li>
            <MobileLink to="/" end>Home</MobileLink>
            </li>
            <li>
              <MobileLink to="/catalog">Catalog</MobileLink>
            </li>
            <li>
              <MobileLink to="/favorites">Favorites</MobileLink>
            </li>
          </BurgerNavList>
        </nav>   
        <div>
            <ImgBurger src={camper} alt="camper" />
        </div>
    </BurgerContainer>
     )}
      </InnerBurgerMenu>
    </MobileMenu>
  )
}

export default BurgerMenu
