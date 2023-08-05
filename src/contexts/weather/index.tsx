import { createContext } from "react";
import { iDefaultProviderProps, iWeatherContext } from "./@types";

export const WaetherContext = createContext({} as iWeatherContext);

export const WaetherProvide = ({ children }: iDefaultProviderProps) => {


   return (
      <WaetherContext.Provider value={{}}>{children}</WaetherContext.Provider>
   );
};
