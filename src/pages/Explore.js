import { MainBar } from "../components/MainBar";
import { SideBar } from "../components/SideBar";
import '../posts.css'

const Explore = () => {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("container", "grid-container");
  gridContainer.id = "explore"

  gridContainer.appendChild(SideBar());
  gridContainer.appendChild(MainBar());

  return gridContainer;
};

export { Explore };
