import styled from "styled-components"

export const StyledCard = styled.div`
   height: 21rem;
   width: 24rem;
   flex-wrap: wrap;
   border-radius: 0.5rem;
   display: flex;
   gap: 2rem;
   flex-direction: column;
   background-color: var(--temp-card-color);


   div{
      display: flex;
      align-items: center;
      justify-content: space-around;
   }
`
