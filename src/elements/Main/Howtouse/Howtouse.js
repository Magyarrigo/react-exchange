import "./Howtouse.css";

import Textarea from "../../../reusable/Textarea/Textarea";
import Secondtitle from "../../../reusable/Secondtitle/Secondtitle";

function Howtouse({ classname, contents }) {
  const firstText =
    "Korzystając z tego prostego kalkulatora możesz przeliczyć wartość wybranej waluty na polską złotówkę. Wystarczy wpisać jaką ilośćodpowiedniej waluty chcemy przeliczyć na złotego oraz dokonać wyboru waluty - a automatycznie pojawi się wynik. Przeliczenie jest dokonywane na podstawie aktualnej Tabeli Kursów Narodowego Banku Polskiego, według kursu średniego.";
  const secondText =
    "Należy pamiętać, że wartość sprzedaży lub zakupu może odbiegać od kursu średniego.";
  const thirdText =
    "Obsługiwane waluty to: USD- dolar amerykański, CHF - frank szwajcarski, EUR -euro.";
  const fourthText =
    "Korzystanie z kalkulatora jest proste i bardzo przejrzyste.";
  const textForHtwo = "Jak korzystać z kalkulatora";

  return (
    <div className="sectionContainer" id="description">
      <div className="descriptionContainer">
        <Secondtitle
          classname="descriptionTitle"
          id="descriptionTitle"
          contents={textForHtwo}
        />
        <Textarea classname="descriptionContent" contents={firstText} />
        <Textarea classname="descriptionContent" contents={secondText} />
        <Textarea classname="descriptionContent" contents={thirdText} />
        <Textarea classname="descriptionContent" contents={fourthText} />
      </div>
    </div>
  );
}

export default Howtouse;
