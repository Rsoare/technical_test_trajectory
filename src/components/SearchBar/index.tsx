import { useContext } from "react";
import { WaetherContext } from "../../contexts/weather";
import { StyledForm } from "./styled";
import { ButtonSearch } from "../../styles/buttons";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm,SubmitHandler } from "react-hook-form";
import { InputSchema } from "./validate";

export interface iNameCity{
   name:string
}
export const SearchBar = () => {
   const { getGeocoding } = useContext(WaetherContext);

   const { register, handleSubmit, formState: { errors } } = useForm<iNameCity>({
      resolver: zodResolver(InputSchema),
   });

   const submit:SubmitHandler<iNameCity> = (formData) => {
      getGeocoding(formData);
   }
   
   return (
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
         <input
            type="text"
            {...register("name")}
            placeholder="Digite o nome da cidade"
         />
         {errors.name ? <p>{errors.name.message}</p> : null}
         <ButtonSearch type="submit">Pesquisar</ButtonSearch>
      </StyledForm>
   );
};