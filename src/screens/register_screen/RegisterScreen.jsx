import React, { useState } from 'react'
import "./RegisterScreen.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import CustomInput from '../../components/molecules/CustomInput'
import Button from '../../components/atoms/Button'
const RegisterScreen = () => {
  const [values,setValues] = useState({
    name: '',
    correo: '',
    telefono: '',
    contrasena: '',
  })
  const navigate = useNavigate();
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }
  const handleSumit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/register',values)
    .then(res=>{
      console.log(res)
      res.data.Status === "Success" ? navigate('/') : alert("Error")
    })
    .catch((err)=> console.log(err))
  }
  return (
    <div className='register-screen-container'>
        <img src="../../../src/assets/logo.png" alt="" style={{marginTop:"40px"}}/>
        <form>
        <CustomInput title={"Name"} placeholder={"Enter your name"} name={'name'} onChange={handleChange} value={values.nombre}/>
        <CustomInput title={"Email"} placeholder={"Enter your email"} name={'correo'} onChange={handleChange} value={values.correo_electronico}/>
        <CustomInput title={"Password"} placeholder={"Enter your password"} name={'contrasena'} onChange={handleChange} value={values.contrasena}/>
        <CustomInput title={"Phone number"} placeholder={"Enter your phone number"} name={'telefono'} onChange={handleChange} value={values.telefono}/>
        <Button text={"Sign up"} css={"register-button"} onClick={handleSumit}/>
        </form>
    </div>
  )
}

export default RegisterScreen




  // const handleName = (event) =>{
  //   setValues({...values, nombre: event.target.value})
  // }
  // const handleEmail = (event) => {
  //   setValues({...values, correo_electronico: event.target.value})
  // }
  // const handlePassword = (event) => {
  //   setValues({...values, contrasena: event.target.value})
  // }
  // const handleTelefono = (event) => {
  //   setValues({...values, telefono: event.target.value})
  // }