
import { iWaether } from "../../contexts/weather/@types";

interface cardsProps{
   weather: iWaether
}

export const Cards = ({weather}: cardsProps) => {

   return (
      <div>
         <p>
            <span>Temperatura: </span>
            {weather.main.temp}
         </p>
         <p>
            <span>Maxima: </span>
            {weather.main.temp_max}
         </p>
         <p>
            <span>Minima: </span>
            {weather.main.temp_min}
         </p>
         <p>
            <span>Sensação termica: </span>
            {weather.main.feels_like}
         </p>
         <p>
            <span>Humidade: </span>
            {weather.main.humidity}
         </p>
         <p>
            <span>Cidade: </span>
            {weather.name}
         </p>
         <p>
            <span>Pais: </span>
            {weather.sys.country}
         </p>
         <p>
            <span>Descrição: </span>
            {weather.weather[0].description}
         </p>
         <p>
            <span>Velocidade do vento: </span>
            {weather.wind.speed}
         </p>
         <p>
            <span>horario: </span>
            {weather.timezone}
         </p>
      </div>
   );

};
