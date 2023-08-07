import { createGlobalStyle } from "styled-components"

export const GlobalTypography = createGlobalStyle`

.Title.header{
   font-size: 1.8rem;
   font-weight: 600;
   letter-spacing: 0.10rem;
   color: var(--grey-0);
}
.Titles.Footer{
   font-size: 0.8rem;
   font-weight: 400;
   letter-spacing: 0.08rem;
   color: var(--grey-0);
}
.Temp.Title{
   font-size: 2.5rem;
   font-weight: 600;
   color: var(--temp-title-color);
}

.Temp.Description{
   font-size: 1.2rem;
   font-weight: 400;
   color: var(--temp-description-color);
}

`