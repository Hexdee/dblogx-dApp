const ProfileBanner = () => {
  const topBanner = document.createElement("div");
  topBanner.classList.add("top-banner");
  const imgCont = document.createElement("div");
  imgCont.classList.add("img-cont");
  const userImg = new Image();
  userImg.src = "";
  userImg.alt = "user-image";

  imgCont.appendChild(userImg);
  topBanner.appendChild(imgCont);

  return topBanner;
};

export { ProfileBanner };
