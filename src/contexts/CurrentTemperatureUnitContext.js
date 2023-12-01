import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});

export { CurrentTemperatureUnitContext };

// const CurrentTemperatureUnitContext = () => {
//   <div className="page">
//     <CurrentTemperatureUnitContext.Provider
//       value={{ currentTemperatureUnit, handleToggleSwitchChange }}
//     >
//       {/* Contents of the App component */}
//     </CurrentTemperatureUnitContext.Provider>
//   </div>;
// };
