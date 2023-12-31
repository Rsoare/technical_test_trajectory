import { createGlobalStyle } from 'styled-components';

   export const GlobalStyles = createGlobalStyle`
   *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: none;
      list-style: none;
      text-decoration: none;
   }

   :root {
   --grey-0: #F8F9FA;
   --grey-100: #868E96;
   --grey-200: #343B41;
   --grey-300: #212529;
   --grey-400: #121214;
   
   --header-color:#00747A;

   --footer-color:#212529;

   --temp-description-color:#F8F9FA;

   --temp-title-color:#F8F9FA;

   --temp-card-color:#323232;

   --input-color:#868E96;

   --names-item-collections:#1976d2;
}

   button{
      cursor: pointer;
   }

   dialog{
      display: unset;
      position: unset;
   }

   body{
      font-family: 'Roboto', sans-serif;
      background-color:#121111;
   }
   `;
