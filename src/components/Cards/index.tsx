import { iWaether } from "../../contexts/weather/@types";
import { StyledCard } from "./styled";

interface cardsProps {
   weather: iWaether;
}

export const Cards = ({ weather }: cardsProps) => {
   console.log(weather.weather[0].icon);
   const urlIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

   return (
      <StyledCard>
         <div>
            <li>
               <img src={urlIcon} alt="" />
            </li>
            <li>
               <span>{weather.main.temp.toFixed(0)}°C</span>
            </li>
         </div>

         <li>
            <span>{weather.weather[0].description}</span>
         </li>

         <div>
            <li>
               <span>Maxima: {weather.main.temp_max.toFixed(0)}°C</span>
            </li>

            <li>
               <span>Minima: {weather.main.temp_min.toFixed(0)}°C</span>
            </li>
         </div>

         <div>
            <li>
               <span>
                  Sensação termica: {weather.main.feels_like.toFixed(0)}°C
               </span>
            </li>

            <li>
               <span>Humidade: {weather.main.humidity}%</span>
            </li>
         </div>

         <div>
            <li>
               {weather.name}
            </li>

            <li>
               {weather.sys.country}
            </li>
         </div>
      </StyledCard>
   );
};
