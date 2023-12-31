import { Nav, Navbar, Container } from "react-bootstrap";

import styled from "styled-components";

export const NavItems = styled(Nav)`
a{
  text-decoration: none !important;
  color:rgba(255, 255, 255, 0.55);
}
`;

export const NavContainer = styled(Container)`
  display: flex !important;
  justify-content: center !important;
`;

export const Navigator = styled(Navbar)`
 opacity:0.8;
  .Brand {
    position: absolute;
    left: 10px;
    font-family:Segoe UI;
  }
`;
