import { Outlet } from "react-router-dom";
import { NavContainer, NavItems, Navigator } from "./Nav.style";
const Navigation = () => {
  return (
    <>
      <Navigator bg="dark" data-bs-theme="dark">
        <NavContainer>
          <Navigator.Brand href="/" className="Brand">
            AliApp
          </Navigator.Brand>
          <NavItems>
            <NavItems.Link href="/signin">Signin</NavItems.Link>
            <NavItems.Link href="/">Home</NavItems.Link>
            <NavItems.Link href="/signup">Signup</NavItems.Link>
          </NavItems>
        </NavContainer>
      </Navigator>
      <Outlet />
    </>
  );
};

export default Navigation;
