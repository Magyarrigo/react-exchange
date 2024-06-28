import Secondtitle from "../../../reusable/Secondtitle/Secondtitle";
import Textarea from "../../../reusable/Textarea/Textarea";
import "./Aboutme.css";

const firstText =
  "Jestem absolwentem Politechniki Budapeszteńskiej uzyskując tytuł magistra inżyniera Energetyki Jądrowej. Już od czasów studiów interesowałem się programowaniem. W ubiegłym roku szczególną uwagę poświęciłem tworzeniu stron internetowych. Rozpocząłem naukę języka angielskiego. Ukończyłem kurs Frontend Developer w CODERSLAB oraz Javascript and React w FUTURE COLLARS.";
const secondText =
  "Znajomość języków obcych: język węgierski - biegła w mowie i piśmie, język rosyjski - bardzo dobra w mowie i piśmie, język angielski poziom B2, język niemiecki - poziom B2.";

const thirdText = "Moim językiem ojczystm jest język polski.";
const fourthText = "Z przyjemnością odpowiem na wszystkie ewentualne pytania.";
const fifthText =
  "Jestem sympatykiem koszykówki oraz biegania. Przez ponad 25 lat byłem sędzią koszykówki. Na koncie mam ukończone biegi maratońskie. Mój najlepszy rezultat to 2 godziny 50 minut.";
const textForHtwo = "MOJE KRÓTKIE CV";

function Aboutme() {
  return (
    <div className="aboutMe sectionContainer" id="aboutMe">
      <div className="aboutMeMyPicture aboutMeSection"></div>
      <div className="aboutMeMyCV aboutMeSection">
        <Secondtitle
          classname="aboutMeTitle"
          id="about"
          contents={textForHtwo}
        />
        <Textarea classname="aboutMeContent" contents={firstText} />
        <Textarea classname="aboutMeContent" contents={secondText} />
        <Textarea classname="aboutMeContent" contents={thirdText} />
        <Textarea classname="aboutMeContent" contents={fourthText} />
        <Textarea classname="aboutMeContent" contents={fifthText} />
      </div>
    </div>
  );
}

export default Aboutme;
