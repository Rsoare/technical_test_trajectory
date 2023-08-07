import { iWaether } from "../../contexts/weather/@types";
import { StyledCard } from "./styled";

interface cardsProps {
   weather: iWaether;
}

export const Cards = ({ weather }: cardsProps) => {
   const urlIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

   return (
      <StyledCard>
         <div>
            <li>
               <span className="Temp Title">
                  {weather.main.temp.toFixed(0)}°C
               </span>
            </li>
            <li>
               <img src={urlIcon} alt="" />
            </li>
         </div>
         <div>
            <li>
               <span className="Temp Description">
                  {weather.weather[0].description}
               </span>
            </li>
         </div>
         <div>
            <li>
               <span className="Temp Description">
                  Maxima: {weather.main.temp_max.toFixed(0)}°C
               </span>
            </li>

            <li>
               <span className="Temp Description">
                  Minima: {weather.main.temp_min.toFixed(0)}°C
               </span>
            </li>
         </div>

         <div>
            <li>
               <span className="Temp Description">
                  Sensação termica: {weather.main.feels_like.toFixed(0)}°C
               </span>
            </li>

            <li>
               <span className="Temp Description">
                  Humidade: {weather.main.humidity}%
               </span>
            </li>
         </div>

         <div>
            <li className="Temp Description">{weather.name}</li>

            <li className="Temp Description">{weather.sys.country}</li>
         </div>
      </StyledCard>
   );
};
