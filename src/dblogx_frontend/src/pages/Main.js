import { Banner } from "../components/Baner";
import { About } from "../components/About";
import { Featured } from "../components/Featured";
import { HowItWorks } from "../components/HowItWorks";
import { TopCreators } from "../components/TopCreators";
import { LowerSection } from "../components/LowerSection";
import image from "../image.png";

const MainPage = () => {

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main");
  mainContainer.appendChild(Banner(image));
  mainContainer.appendChild(About());
  mainContainer.appendChild(Featured())
  mainContainer.appendChild(HowItWorks())
  mainContainer.appendChild(TopCreators(image))
  mainContainer.appendChild(LowerSection())
  return mainContainer;
};

export { MainPage };
