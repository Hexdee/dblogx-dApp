const TopCreators = (image) => {
  const topCreators = document.createElement("div");
  topCreators.classList.add("top-creators", "main-container");

  const topCreatorsTitle = document.createElement("h2");
  topCreatorsTitle.textContent = "Top Creators";

  const topCreatorsRow = document.createElement("div");
  topCreatorsRow.classList.add("row");

  const img = document.createElement("div");
  img.classList.add("img");

  const imgElement = document.createElement("img");
  imgElement.src = image;
  imgElement.alt = "";

  const details = document.createElement("div");
  details.classList.add("details");

  const creatorTitle = document.createElement("h3");
  creatorTitle.textContent = "Artsy Ashley";

  const creatorDesc = document.createElement("p");
  creatorDesc.textContent =
    "ArtsyAshley is a passionate artist who loves to inspire others with her vibrant acrylic paintings and creative tutorials.";

  const follow = document.createElement("div");
  follow.classList.add("follow");

  const followIcon = document.createElement("i");
  followIcon.classList.add("fa-solid", "fa-user-plus");

  const followText = document.createElement("p");
  followText.textContent = "Follow";

  img.appendChild(imgElement);
  follow.appendChild(followIcon);
  follow.appendChild(followText);

  details.appendChild(creatorTitle);
  details.appendChild(creatorDesc);
  details.appendChild(follow);

  topCreatorsRow.appendChild(img);
  topCreatorsRow.appendChild(details);

  topCreators.appendChild(topCreatorsTitle);
  topCreators.appendChild(topCreatorsRow);

  return topCreators;
};

export { TopCreators };
