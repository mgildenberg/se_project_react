import React, { useState } from "react";
import "../blocks/ToggleSwitch.css";

const ToggleSwitch = () => {
  const [currentTemperatureUnit, handleToggleSwitchChange] = useState("C");

  const handleChange = (e) => {
    console.log(e);
    if (currentTemperatureUnit === "C") {
      handleToggleSwitchChange("F");
    }

    if (currentTemperatureUnit === "F") {
      handleToggleSwitchChange("C");
    }
  };

  console.log(currentTemperatureUnit);

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleChange}
      ></input>
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider_F"
            : "switch__slider switch__slider_C"
        }
      ></span>
      <p
        className={`switch__temp switch__temp_F ${
          currentTemperatureUnit === "F" && "switch_active"
        }`}
      >
        F
      </p>
      <p
        className={`switch__temp switch__temp_C ${
          currentTemperatureUnit === "C" && "switch_active"
        }`}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;
