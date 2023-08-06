import { useState, useContext } from "react";
import { WaetherContext } from "../../contexts/weather";

export const SearchBar = () => {
   const { getGeocoding } = useContext(WaetherContext);

   const [inputValue, setInputValue] = useState("");

   const submit = (event: { preventDefault: () => void }) => {
      event.preventDefault();

      getGeocoding(inputValue)
   
      setInputValue("");
   };

   return (
      <form onSubmit={submit}>
         <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
         />
         <button onClick={submit}>Perquisar</button>
      </form>
   );
};
