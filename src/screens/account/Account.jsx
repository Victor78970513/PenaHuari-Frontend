import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button";
import AccountInput from "../../components/molecules/AccountInput";
import axios from "axios";
const Account = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [correo, setCorreo] = useState("");
  const [values,setValues] = useState({
    name: '',
    correo: '',
  })
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
          setCorreo(res.data.correo_electronico);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  }, []);
  const handleSumit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/updateaccount',values)
    .then(res=>{
      console.log(res)
      res.data.Status === "Success" ? navigate('/') : alert("Error")
    })
    .catch((err)=> console.log(err))
  }
  return (
    <div className="profile-container">
      <div className="top-container">
        <Icon
          className="password-icon-back"
          icon="material-symbols:arrow-back"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="profile-name">
        <Icon className="photo-profile" icon="bi:person-circle" />
      </div>
      <div className="inputs-password-container">
        <AccountInput title="Name" placeholder={name} onChange={handleChange} name={'name'} value={values.name}/>
        <AccountInput title="Email" placeholder={correo} onChange={handleChange} name={'correo'} value={values.correo}/>
      </div>
      <Button
        text={"Guardar Cambios"}
        css={"register-button"}
        onClick={handleSumit}
      />
    </div>
  );
};

export default Account;
