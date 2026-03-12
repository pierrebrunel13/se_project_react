import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ clothingItems, handleCardClick }) {
  return (
    <div className="profile-page">
      <SideBar />
      <ClothesSection clothingItems={clothingItems} handleCardClick={handleCardClick} />
    </div>
  );
}

export default Profile;