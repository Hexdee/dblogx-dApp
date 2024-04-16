import { showProfileCard } from "..";
import image from "../image.png";
const ProfileImg = () => {
  const profileImg = document.createElement("div");
  profileImg.classList.add("profile-img");

  const img = new Image();
  img.src = image;
  img.id = "profile-img";

  profileImg.appendChild(img);

  profileImg.addEventListener('click', () => {
    showProfileCard()
  })

  return profileImg;
};

export { ProfileImg };
