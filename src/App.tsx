import React from "react";
import {
  StyledMain,
  StyledHeader,
  StyledImg,
} from "./StyledApp";
import Home from "./screen/Home";
import Logo from "./assets/rea-group.svg";

// Delaring Function Component Type for App.js and Adding Styled Components onto respective HTML Tags
const App: React.FC = () => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledImg src={Logo} alt={"Rea Group Logo"} />
      </StyledHeader>
      <Home />
    </StyledMain>
  );
};

export default App;