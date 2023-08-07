import { createContext, useState } from "react";
import {
   iDefaultProviderProps,
   iGeocoding,
   iWaether,
   iWeatherContext,
} from "./@types";
import { apiWeather, apiGeocoding } from "../../services/api";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { iNameCity } from "../../components/SearchBar";

export const WaetherContext = createContext({} as iWeatherContext);

export const WaetherProvide = ({ children }: iDefaultProviderProps) => {
   const [weathers, setWeathers] = useState<iWaether[]>([]);

   const keyApi = "2d030e32038fe9ecf2039f9a91cd35ad";

   const getGeocoding = async (data:iNameCity) => {
   
      try {
         const response: AxiosResponse<iGeocoding[]> = await apiGeocoding.get(
            `/direct?q=${data.name}&limit=5&appid=${keyApi}`
         );

         localStorage.clear();

         response.data.forEach((geocoding) => {
            getCurrentWeather(geocoding);
         });
      } catch (error) {
         toast.error(
            "Network Error: Não foi possivel inicial a aplicação, por favor tente novamente mais tarde"
         );
         console.error(error);
      }
   };

   const getCurrentWeather = async (geocoding: iGeocoding) => {
      try {
         const lat = geocoding.lat;
         const lon = geocoding.lon;

         const response: AxiosResponse<iWaether> = await apiWeather.get(
            `/weather?lat=${lat}&lon=${lon}&appid=${keyApi}&units=metric&lang=pt_br`
         );

         const newWeatherData = response.data;

         const existingWeathers = JSON.parse(
            localStorage.getItem("@tecnical:weathers") || "[]"
         );

         if (
            !existingWeathers.some(
               (weather: iWaether) => weather.id === newWeatherData.id
            )
         ) {
            const updatedWeathers = [...existingWeathers, newWeatherData];

            localStorage.setItem(
               "@tecnical:weathers",
               JSON.stringify(updatedWeathers)
            );

            setWeathers(updatedWeathers);
         }
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <WaetherContext.Provider value={{ getGeocoding, weathers }}>
         {children}
      </WaetherContext.Provider>
   );
};
