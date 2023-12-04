import React, { useState, useContext } from "react";
import "../blocks/ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleToggleSwitchChange}
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
