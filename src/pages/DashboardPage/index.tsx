import { useContext, useEffect } from "react";
import { WaetherContext } from "../../contexts/weather";
import { Cards } from "../../components/Cards";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SearchBar } from "../../components/SearchBar";

export const Dashboard = () => {
   const { weathers, getGeocoding } = useContext(WaetherContext);

   useEffect(() => {
      getGeocoding("rio");

      // const intervalId = setInterval(() => {
      //    getGeocoding("rio");
      // }, 60000);

      // return () => clearInterval(intervalId);
   }, []);

   return (
      <>
         <Header />
         <main>
            <section>
               <p>Digite o nome da cidade desejada: </p>
               <SearchBar />
            </section>
            <section>
               <ul>
                  {weathers.map((weather) => (
                     <Cards key={weather.id} weather={weather} />
                  ))}
               </ul>
            </section>
         </main>
         <Footer />
      </>
   );
};
