import { loadPage } from "..";
import { ProfileBanner } from "../components/ProfileBanner";
import { ProfileImg } from "../components/ProfileImg";
import "../profile.css";
import { MainPage } from "./Main";
const Profile = () => {
  const profileImg = ProfileImg();
  const connectSearch = document.querySelector(".connect-search");
  const profile = document.createElement("div");
  profile.classList.add("bio-profile");
  const topBanner = ProfileBanner()
  
  const formElem = document.createElement("form");
  formElem.classList.add("form-elem", "container");
  const topLegend = document.createElement("legend");
  topLegend.textContent = "Tell us about yourself";
  const fieldSet = document.createElement("fieldset");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name";
  const nameInput = document.createElement("input");
  nameInput.required = true;
  nameInput.type = "text";
  nameInput.id = "name";

  const bioLabel = document.createElement("label");
  bioLabel.textContent = "Bio";
  const biotext = document.createElement("textarea");
  nameInput.type = "text";
  nameInput.id = "bio";
  biotext.rows = 15;
  biotext.cols = 30;

  const lowerDiv = document.createElement("div");
  lowerDiv.classList.add("btn-div");
  const discardBtn = document.createElement("button");
  discardBtn.textContent = "Discard";
  const save = document.createElement("button");
  discardBtn.classList.add("btn");
  save.classList.add("btn", "btn-colored");
  save.textContent = "Save changes";


  const bottomLegend = document.createElement("legend");
  bottomLegend.textContent = "Social media links";
  const fieldSet2 = document.createElement("fieldset");
  const topInput = document.createElement('div')
  topInput.classList.add('top-input')
  const instaLabel = document.createElement("label");
  instaLabel.textContent = "Instagram";
  const instaInput = document.createElement("input");

  const twitterLabel = document.createElement("label");
  twitterLabel.textContent = "Twitter";
  const twitterInput = document.createElement("input");
  twitterInput.type = "url";
  twitterInput.id = "twitter";

  const lowInput = document.createElement('div')
  lowInput.classList.add('low-input')
  const tiktokLabel = document.createElement("label");
  tiktokLabel.textContent = "Tiktok";
  const titokInput = document.createElement("input");
  titokInput.type = "url";
  titokInput.id = "tiktok";

  const linkedInLabel = document.createElement("label");
  linkedInLabel.textContent = "Linkedin";
  const linkedInInput = document.createElement("input");
  linkedInInput.type = "url";
  linkedInInput.id = "linkedin";

  fieldSet2.appendChild(bottomLegend)
  fieldSet2.appendChild(topInput)
  fieldSet2.appendChild(lowInput)
  topInput.appendChild(instaLabel)
  topInput.appendChild(twitterLabel)
  lowInput.appendChild(tiktokLabel)
  lowInput.appendChild(linkedInLabel)

  discardBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
  save.addEventListener("click", (e) => {
    if (nameInput.value !== "") {
      e.preventDefault();
      loadPage(MainPage());
      const lowerSection = document.querySelector(".lower");
      const main = document.querySelector(".main");
      if (main && lowerSection) {
        main.removeChild(lowerSection);
      }
      connectSearch.appendChild(profileImg);
      profileImg.style.display = "flex";
    }
  });

  lowerDiv.appendChild(discardBtn);
  lowerDiv.appendChild(save);
  fieldSet.append(topLegend);
  nameLabel.appendChild(nameInput);
  fieldSet.appendChild(nameLabel);
  bioLabel.appendChild(biotext);
  instaLabel.appendChild(instaInput);
  twitterLabel.appendChild(twitterInput);
  tiktokLabel.appendChild(titokInput);
  linkedInLabel.appendChild(linkedInInput);
  fieldSet.appendChild(bioLabel);
  
  formElem.appendChild(fieldSet);
  formElem.appendChild(fieldSet2);
  formElem.appendChild(lowerDiv);

  profile.appendChild(topBanner);
  profile.appendChild(formElem);

  return profile;
};

export { Profile };
