import styled from "styled-components";

export const StyledForm = styled.form`
   position: relative;
   align-items: center;
   height: 7rem;
   display: flex;
   gap: 1rem;

   input {
      width: 18rem;
      height: 2.5rem;
      border-radius: 1rem;
      background-color: var(--input-color);
      color: var(--grey-0);
      font-size: 1rem;
      padding-left: 2rem;
      margin: 1rem 0;
   }
   P{
      color: red;
      position: absolute;
      bottom: 0;
      bottom: 9px;
      left: 48px;
   }

   input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
   }

   input::placeholder{
      color: var(--grey-0);
   }
`;
