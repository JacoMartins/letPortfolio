import { ReactNode } from "react";
import { CoreContainer } from "./styles";

interface Props{
  children: ReactNode;
}

export function PicContainer({children}:Props) {
  return(
    <CoreContainer>
      {children}
    </CoreContainer>
  )
}