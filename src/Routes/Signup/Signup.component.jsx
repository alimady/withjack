import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Row, Col, Container } from "./Signup.style";
import { Avatar } from "./Signup.style";
import { Button } from "./Signup.style";
import { RegisterUser } from "../../utils/php";
import axios from "axios";
import { useState } from "react";
import { signupStart,signupFailed,signupSuceess } from "../../store/user/user.actions";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [user, setCurrentUser] = useState([]);
  const [data, setInputData] = useState({});
  const [error, setError] = useState({});
  const dispatch=useDispatch()

   const onChangeHandler = (name, value) => {
    setInputData({ ...data, [name]: value });
  };
  const signupHandler = () => {
    dispatch(signupStart())
    RegisterUser(data)
      .then((user) => {
        dispatch(signupSuceess(user))
        localStorage.setItem("token", user.token);
      })
      .catch((error) => {
        dispatch(signupFailed(error.response.data.errors))
       });
  };

  return (
    <Row>
      <Col lg={5}>
        <Box
          component="form"
          sx={[{
            "& .MuiTextField-root": { m: 1, width: "90%" },
          },{textAlign:'center'}]}
          noValidate
          autoComplete="off"
        >
          <div>
            <Avatar>
              <img src="https://avatars3.githubusercontent.com/u/21200292?v=4" />
            </Avatar>
            <h2>SIGN UP</h2>
            <TextField
              error={error && error.email ? true : false}
              id="standard-error-helper-text"
              label="Email"
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
              defaultValue=""
              helperText={error && error.password}
              variant="standard"
              onChange={(event) =>
                onChangeHandler("password", event.target.value)
              }
            />

             <TextField
              error={error && error.email ? true : false}
              id="standard-error-helper-text"
              label="Confirm password"
              type="password"
              defaultValue=""
              helperText={error && error.password}
              variant="standard"
              onChange={(event) => onChangeHandler("password_confirmation", event.target.value)}
            />

              <TextField
              error={error && error.name ? true : false}
              id="standard-error-helper-text"
              label="Name"
              defaultValue=""
              helperText={error && error.name}
              variant="standard"
              onChange={(event) => onChangeHandler("name", event.target.value)}
            />
          </div>
        </Box>

        <Button variant="contained" color="success" onClick={ signupHandler}>
          Sign up
        </Button>
      </Col>
    </Row>
  );
};
export default Signup;
