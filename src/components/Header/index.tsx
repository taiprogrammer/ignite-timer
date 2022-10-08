import logo from "../../assets/logo.svg";

import { NavLink } from "react-router-dom";
import { Timer, Scroll } from "phosphor-react";

import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} />
      </div>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
