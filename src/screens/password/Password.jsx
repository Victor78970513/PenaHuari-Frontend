import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Password.css";
import AccountInput from "../../components/molecules/AccountInput";
import Button from "../../components/atoms/Button";
import axios from "axios";
const Password = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleUpdatePassword = () => {
    if (newPassword === confirmPassword) {
      axios
        .post("http://localhost:3000/updatepassword", { newPassword })
        .then((res) => {
          console.log(res);
          res.data.Status === "Success" ? navigate("/") : alert("Error");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Las contrasenas no son iguales");
    }
  };

  return (
    <div className="profile-container">
      <div className="top-container">
        <NavLink className="navlink" to={"/profile"}>
          <Icon
            className="password-icon-back"
            icon="material-symbols:arrow-back"
          />
        </NavLink>
      </div>
      <div className="profile-name">
        <Icon className="photo-profile" icon="bi:person-circle" />
      </div>
      <div className="inputs-password-container">
        <AccountInput
          title="Nueva Contrasena"
          placeholder="ingrese su nueva contrasena"
          value={newPassword}
          onChange={(e)=>setNewPassword(e.target.value)}
        />
        <AccountInput
          title="Confirmar Contrasena"
          placeholder="ingrese una vez mas la contrasena"
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />
      </div>
      <Button
        text={"Actualizar Contrasena"}
        css={"register-button"}
        onClick={handleUpdatePassword}
      />
    </div>
  );
};

export default Password;
