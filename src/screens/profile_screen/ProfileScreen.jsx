import React from "react";
import { Icon } from "@iconify/react";
import "./ProfileScreen.css";
import ProfileButton from "../../components/molecules/ProfileButton";
const ProfileScreen = () => {
  return (
    <div className="profile-container">
      <div className="top-container"></div>
      <div className="profile-name">
        <Icon className="photo-profile" icon="bi:person-circle" />
        <span >Hi, Franklin</span>
      </div>
      <div className="inputs-container">
        <ProfileButton icon={"iconamoon:profile"} text={"Account"} route={"/account"}/>
        <ProfileButton icon={"mdi:payment"} text={"Payment method"} route={"/payment"}/>
        <ProfileButton icon={"mdi:key-outline"} text={"Change password"} route={"/changepassword"}/>
        <ProfileButton icon={"humbleicons:logout"} text={"Log out"} route={"/logout"}/>
      </div>
    </div>
  );
};

export default ProfileScreen;
