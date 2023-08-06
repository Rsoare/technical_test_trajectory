import styled from "styled-components"

export const StyledFooter = styled.footer`
   display: flex;
   height: 5rem;
   align-content: center;
   justify-content: center;
   flex-wrap: wrap;
   background-color: var(--footer-color);

   div{
      display: flex;
      gap: 1rem;
      flex-direction: column;
      align-items: center;
   }
`