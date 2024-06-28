import "./Main.css";

import Container from "../../reusable/Container/Container";
import Aboutme from "./Aboutme/Aboutme";
import Converter from "./Converter/Converter";
import Howtouse from "./Howtouse/Howtouse";

function Main() {
  return (
    <main className="mainContainer" id="description">
      <Container>
        <Howtouse />
        <Converter />
        <Aboutme />
      </Container>
    </main>
  );
}

export default Main;
