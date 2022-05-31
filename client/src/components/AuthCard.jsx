import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../redux/services/authApi";
import { useDispatch } from "react-redux";
import { authCardAction } from "../redux/slices/globalSlice";
import Cookie from "js-cookie";

const AuthCard = () => {
  const [authForm, setAuthForm] = useState("login");
  const login = useLoginMutation();
  const register = useRegisterMutation();
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [registerForm, setRegisterForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    if (login[1]?.data) {
      console.log(login[1].data?.message);
      Cookie.set("authToken", login[1].data?.token, { expires: 7 });
      dispatch(authCardAction(false));
    }
  }, [login[1].isSuccess]);

  useEffect(() => {
    if (login[1].error) {
      console.log(login[1].error?.data?.message);
    }
  }, [login[1].isError]);

  useEffect(() => {
    if (register[1].data) {
      console.log(register[1].data?.message);
      dispatch(authCardAction(false));
    }
  }, [register[1].isSuccess]);

  useEffect(() => {
    if (register[1].error) {
      console.log(register[1].error?.data?.message);
    }
  }, [register[1].isError]);

  const handleLogin = async () => {
    try {
      await login[0](loginForm);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async () => {
    try {
      await register[0](registerForm);
    } catch (error) {
      console.log(error);
    }
  };

  const LoginForm = () => {
    return (
      <Form onSubmit={handleLogin}>
        <Input
          placeholder="Email"
          type="text"
          value={loginForm.email}
          onChange={(e) =>
            setLoginForm({ ...loginForm, email: e.target.value })
          }
        />
        <Input
          placeholder="*******"
          type="password"
          value={loginForm.password}
          onChange={(e) =>
            setLoginForm({ ...loginForm, password: e.target.value })
          }
        />
        <SubmitButton type="submit" title="Register" />
      </Form>
    );
  };

  const RegisterForm = () => {
    return (
      <Form onSubmit={handleRegister}>
        <Input
          placeholder="Email"
          type="text"
          value={registerForm.email}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, email: e.target.value })
          }
        />
        <Input
          placeholder="Username"
          type="text"
          value={registerForm.username}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, username: e.target.value })
          }
        />
        <Input
          placeholder="*******"
          type="password"
          value={registerForm.password}
          onChange={(e) =>
            setRegisterForm({ ...registerForm, password: e.target.value })
          }
        />
        <SubmitButton type="submit" title="Register" />
      </Form>
    );
  };

  return (
    <Container>
      <TopBar>
        <IconButton onClick={() => dispatch(authCardAction(false))}>
          <AiOutlineClose size={25} />
        </IconButton>
      </TopBar>
      <Header>
        {authForm === "login" ? (
          <ActiveLoginPageButton onClick={() => setAuthForm("login")}>
            Login
          </ActiveLoginPageButton>
        ) : (
          <LoginPageButton onClick={() => setAuthForm("login")}>
            Login
          </LoginPageButton>
        )}
        {authForm === "register" ? (
          <ActiveRegisterPageButton onClick={() => setAuthForm("register")}>
            Register
          </ActiveRegisterPageButton>
        ) : (
          <RegisterPageButton onClick={() => setAuthForm("register")}>
            Register
          </RegisterPageButton>
        )}
      </Header>
      {authForm === "login" ? <LoginForm /> : <RegisterForm />}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 20px;
  box-shadow: 0px 9px 26px rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.backgroundColor};
  top: 0;
  margin-top: 10%;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 30px;
`;
const IconButton = styled.div`
  width: 25px;
  height: 25px;

  & :hover {
    cursor: pointer;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 2px solid ${({ theme }) => theme.secondaryColor};
  padding: 5px 0;
  margin: 0 5px;
`;

const LoginPageButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;

const ActiveLoginPageButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.secondaryColor};
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  padding: 10px 25px;
  color: white;
`;

const RegisterPageButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;

const ActiveRegisterPageButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.secondaryColor};
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  padding: 10px 25px;
  color: white;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-top: 50px;
`;

const Input = styled.input`
  width: 300px;
  height: 50px;
  padding: 0 10px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  margin: 5px 0;
  font-size: 18px;
`;

const SubmitButton = styled.input`
  width: 150px;
  height: 50px;
  background-color: ${({ theme }) => theme.secondaryColor};
  border: none;
  border-radius: 12px;
  margin-top: 10px;
  color: white;
  font-size: 18px;
  font-weight: 700px;
  cursor: pointer;
`;

export default AuthCard;
