import { createContext, } from "react";
import { iDefaultProviderProps, iWeatherContext } from "./@types";
import { api } from "../../services/api";

export const WaetherContext = createContext({} as iWeatherContext);

export const WaetherProvide = ({ children }: iDefaultProviderProps) => {

   // const [waether, setWaether] = useState()

   const getCurrentWeather = async () => {

      const keyApi = '2d030e32038fe9ecf2039f9a91cd35ad'
      
      try {
         const response = await api.get(`/onecall?lat=33.44&lon=-94.04&appid=${keyApi}`);

         // console.log(response)

         // setWaether(response)
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <WaetherContext.Provider value={{getCurrentWeather}}>{children}</WaetherContext.Provider>
   );
};
