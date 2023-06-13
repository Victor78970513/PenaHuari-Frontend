import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./ProfileScreen.css";
import ProfileButton from "../../components/molecules/ProfileButton";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
const ProfileScreen = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  }, []);
  const handleNavigate = (path) =>{}
  const handleDelete=()=>{
    axios.get("http://localhost:3000/logout")
    .then(res=>{
      location.reload(true)
    }).catch(err => console.log(err))
  }
  return auth ? (
    <div className="profile-container">
      <div className="top-container"></div>
      <div className="profile-name">
        <Icon className="photo-profile" icon="bi:person-circle" />
        <span>Hola, {name}</span>
      </div>
      <div className="inputs-container">
        <ProfileButton
          icon={"iconamoon:profile"}
          text={"Account"}
        />
        <ProfileButton
          icon={"mdi:payment"}
          text={"Payment method"}
        />
        <ProfileButton
          icon={"mdi:key-outline"}
          text={"Change password"}
        />
        <ProfileButton
          icon={"humbleicons:logout"}
          text={"Log out"}
          onClick={handleDelete}
        />
      </div>
    </div>
  ) : (
    <div className="profile-container">
      <div className="top-container"></div>
      <div className="profile-name">
        <Icon className="photo-profile" icon="bi:person-circle" />
        <span>Unknow</span>
      </div>
      <div className="inputs-container">
        <NavLink to={"/login"} className="navlink">      <ProfileButton
          icon={"memory:login"}
          text={"Login"}
        /></NavLink>
      </div>
    </div>
  );
};

export default ProfileScreen;
