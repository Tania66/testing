import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/icon/camper.svg";
import { Container, Header, HeaderLink,Link, LogoImg } from "./Layout.styled";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Layout = () => {
  const camper = logo;
  return (
    <Container>
      <Header>
        <div>
          <NavLink to="/" end>
            <LogoImg src={camper} alt="camper" />
          </NavLink>
        </div>
        <nav>
          <HeaderLink>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </HeaderLink>
        </nav>
        <BurgerMenu/>
      </Header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
