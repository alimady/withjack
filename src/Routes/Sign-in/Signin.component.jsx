import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Row, Col, Container } from "./Signin.style";
import { Avatar } from "./Signin.style";
import { Button } from "./Signin.style";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLoginError, selectUser } from "../../store/user/user.selector";
import { signInStart,clearError } from "../../store/user/user.reducer";

 const Signin = () => {
  const [data, setInputData] = useState({});
  const error = useSelector(selectLoginError);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth=useSelector(selectUser)

  useEffect(()=>{
   if(auth){
    navigate('/')
   }
  },[auth])

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, []);

  const onChangeHandler = (name, value) => {
    setInputData({ ...data, [name]: value });
  };

  const signinHandler = () => {
    dispatch(signInStart(data));
   };

  

  return (
    <Row>
      <Col lg={5}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "90%" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <Avatar>
              <img src="https://avatars3.githubusercontent.com/u/21200292?v=4" />
            </Avatar>
            <TextField
              error={error && error.email ? true : false}
              id="standard-error-helper-text"
              label="Email"
              name="email"
              defaultValue=""
              helperText={error && error.email}
              variant="standard"
              onChange={(event) => onChangeHandler("email", event.target.value)}
            />
            <br />
            <TextField
              id="standard-error-helper-text"
              error={error && error.password ? true : false}
              type="password"
              label="Password"
              name="password"
              defaultValue=""
              helperText={error && error.password}
              variant="standard"
              onChange={(event) =>
                onChangeHandler("password", event.target.value)
              }
            />
          </div>
        </Box>

        <Button
          variant="contained"
          color="success"
          onClick={() => signinHandler()}
        >
          Sign In
        </Button>
      </Col>
    </Row>
  );
};

export default Signin;
