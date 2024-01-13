import { Outlet } from "react-router-dom";
import { NavContainer, NavItems, Navigator } from "./Nav.style";
import { useSelector } from "react-redux";
import { selectCurrentUser,selectIsAuth } from "../../store/user/user.selector";
import { useDispatch } from "react-redux";
import { signoutStart } from "../../store/user/user.actions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
 const Navigation = () => {
  const user=useSelector(selectCurrentUser)
  const isAuth=useSelector(selectIsAuth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const signoutHandler=()=>{
    localStorage.clear()
    dispatch(signoutStart())
    navigate('/signin') 
  }
  //console.log(isAuth)
   return (
    <>
      <Navigator bg="dark" data-bs-theme="dark">
        <NavContainer>
          <Navigator.Brand href="/" className="Brand">
            AliApp
          </Navigator.Brand>
          <NavItems>
            {isAuth?<NavItems.Link style={{color:'white'}}>{`Hi ${user?.name}`}</NavItems.Link>:<NavItems.Link ><Link to="/signin">SIGN IN</Link></NavItems.Link>}
            {isAuth &&<NavItems.Link  onClick={()=>signoutHandler()}>SIGN OUT</NavItems.Link>}

          <NavItems.Link > <Link to="/">HOME</Link></NavItems.Link>
            {!isAuth &&<NavItems.Link > <Link to="/signup">SIGN UP</Link></NavItems.Link>}
          </NavItems>
        </NavContainer>
      </Navigator>
      <Outlet />
    </>
  );
};

export default Navigation;
