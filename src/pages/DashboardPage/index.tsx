import { useContext, useEffect } from "react";
import { WaetherContext } from "../../contexts/weather";
import { Cards } from "../../components/Cards";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { StyledContainer } from "../../styles/grid";
import { StyledUl } from "./styled";

export const Dashboard = () => {
   const { weathers, getGeocoding } = useContext(WaetherContext);

   const cities = [
      "São Paulo","Rio de Janeiro","Salvador","Brasília","Fortaleza",
      "Belo Horizonte","Manaus","Curitiba","Recife","Porto Alegre","Belém","Goiânia","Guarulhos",
      "Campinas","São Luís","São Gonçalo","Maceió","Duque de Caxias","Nova Iguaçu","São Bernardo do Campo",];
   
   const randomIndex = Math.floor(Math.random() * cities.length);

   useEffect(() => {

      const randomCity = cities[randomIndex]

      getGeocoding({ name: randomCity });
         
      const intervalId = setInterval(() => {
         getGeocoding({ name: randomCity});
      }, 300000);

      return () => clearInterval(intervalId);
   }, []);

   return (
      <>
         <Header />
         <main>
            <StyledContainer>
               <section>
                  <SearchBar />
               </section>
               <section>
                  <StyledUl>
                     {weathers.map((weather) => (
                        <Cards key={weather.id} weather={weather} />
                     ))}
                  </StyledUl>
               </section>
            </StyledContainer>
         </main>
      </>
   );
};
