import { MainPage } from "./pages/Main";
import "./index.css";
import { Connect } from "./components/Connect";
import { ProfileImg } from "./components/ProfileImg";
import { ProfileCard } from "./components/ProfileCard";
import { Explore } from "./pages/Explore";

let isConnected = false;
const main = document.querySelector("main");
const connectBtns = document.querySelectorAll(".sign-up");
const header = document.querySelector("header");
const navbar = document.querySelector("nav");
const connectSearch = document.querySelector(".connect-search");
const exploreTab = document.querySelector(".explore");
const mainPage = MainPage();
const connectComponent = Connect();
const profileImg = ProfileImg();
const profileCard = ProfileCard();

const handleConnect = () => {
  header.appendChild(connectComponent);
  connectComponent.classList.toggle("show");
};

const getConnected = () => {
  isConnected = true;
  connectBtns.forEach((connectBtn) => {
    connectBtn.style.display = "none";
  });
  loadPage(MainPage());
  const lowerSection = document.querySelector(".lower");
  const main = document.querySelector(".main");
  if (main && lowerSection) {
    main.removeChild(lowerSection);
  }
  connectSearch.appendChild(profileImg);
  profileImg.style.display = "flex";
};

const showProfileCard = () => {
  navbar.appendChild(profileCard);
  profileCard.classList.toggle("show");
};

const loadPage = (page) => {
  main.innerHTML = "";
  main.appendChild(page);
};

exploreTab.addEventListener("click", (e) => {
  e.preventDefault();
  loadPage(Explore());
});
function getIsConnected() {
  return isConnected;
}

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("sign-up")) {
    handleConnect();
  }
});

loadPage(mainPage);

export {
  loadPage,
  getConnected,
  showProfileCard,
  handleConnect,
  getIsConnected,
};
