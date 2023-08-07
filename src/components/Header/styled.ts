import styled from "styled-components";

export const StyledHeader = styled.header`
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 1.5rem;
   align-items: center;
   height: 5rem;
   background-color: var(--header-color);
   -webkit-box-shadow: 0px 4px 15px -8px rgba(0,0,0,0.75);
   -moz-box-shadow: 0px 4px 15px -8px rgba(0,0,0,0.75);
   box-shadow: 0px 4px 15px -8px rgba(0,0,0,0.75);

   @media screen and ( min-width:1024px){
         width: 100%;
         margin: 0 auto;
         flex-direction: row;
         height: 5rem;
         justify-content: space-between;
         padding: 0 1rem;
      }
`