import React from "react";
import Typography from "@mui/material/Typography";
import FoodCards from "./FoodCards";
import CustomButton from "./CustomButton";
import GroupedAvatar from "./GroupedAvatar";
import food2 from "../images/food/food2.png";

import "../styles/banner.css";
import "../styles/buttons.css";

function Banner() {
  return (
    <div className="banner-main">
      <div className="banner-section1 flex">
        <div className="banner-left">
          <Typography className="bannerText" variant="h2" component="h2">
            it's not just <br /> Food, it's an <br /> Experience.
          </Typography>
          <div className="banner-btns flex">
            <CustomButton>View Menu</CustomButton>
            <CustomButton isLight>Book a Table</CustomButton>
          </div>
          <Typography className="pTag" variant="p" component="p">
            Reveiws
          </Typography>
          <GroupedAvatar />
        </div>
        <div className="banner-right flex">
          <img className="banner-food-img" src={food2} alt="food" />
        </div>
      </div>
      <div className="banner-section2">
        <FoodCards />
      </div>
    </div>
  );
}

export default Banner;
