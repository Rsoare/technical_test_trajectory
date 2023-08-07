import { StyledContainer } from "../../styles/grid";
import { StyledHeader } from "./styled";

export const Header = () => {
   return (
      <StyledHeader>
         <StyledContainer>
            <h1 className="Title header">Clima Hoje</h1>
         </StyledContainer>
      </StyledHeader>
   );
};
