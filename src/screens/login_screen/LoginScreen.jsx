import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button";
import CustomInput from "../../components/molecules/CustomInput";
import "./LoginScreen.css";
const LoginScreen = () => {
  const navigate = useNavigate();
  const [values,setValues] = useState({
    correo: '',
    contrasena: '',
  })
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }
  axios.defaults.withCredentials = true;
  const handleSumit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/login',values)
    .then(res=>{
      console.log(res)
      res.data.Status === "Success" ? navigate('/') : alert("Error")
    })
    .catch((err)=> console.log(err))
  }
  return (
    <div className="login-screen-container">
      <img src="../../../src/assets/logo.png" alt="" style={{ marginBottom: "50px", marginTop: "40px" }}/>
      <form onSubmit={handleSumit}>
        <CustomInput title={"Email"} placeholder={"Enter your email"} name={'correo'} onChange={handleChange} value={values.correo}/>
        <CustomInput title={"Password"} placeholder={"Enter your password"} name={'contrasena'} onChange={handleChange} value={values.contrasena}/>
        <Button text={"Iniciar Sesion"} css={"login-button"} onClick={handleSumit} />
      </form>
      <NavLink className="navlink" to={'/register'}><Button text={"Crear cuenta"} css={"login-button"}/></NavLink>
    </div>
  );
};

export default LoginScreen;
