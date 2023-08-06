import { useContext, useEffect } from "react";
import { WaetherContext } from "../../contexts/weather";
import { Cards } from "../../components/Cards";

export const Dashboard = () => {
   const { weathers, getGeocoding,} = useContext(WaetherContext);


   useEffect(() => {
      getGeocoding();
   }, []);

   return (
   <ul>
         {weathers.map(weather => <Cards key={weather.id} weather={weather}/>)}
   </ul>
   )
};


