import { Explore } from "../pages/Explore";
import { getIsConnected, loadPage } from "..";
import { Create } from "../pages/Create";

const Banner = (image) => {
  const banner = document.createElement("div");
  banner.classList.add("banner", "main-container");

  const bannerDesc = document.createElement("div");
  bannerDesc.classList.add("banner-desc");

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("join-explore");
  const join = document.createElement("button");
  join.classList.add("join", "btn", "btn-colored", getIsConnected() ? "create" : "sign-up");
  join.textContent = getIsConnected() ? "Create post" : "Join dBlogX";

  const exploreBlogs = document.createElement("button");
  exploreBlogs.classList.add("explore", "btn");
  exploreBlogs.textContent = "Explore content";

  btnDiv.appendChild(join);
  btnDiv.appendChild(exploreBlogs);

  bannerDesc.innerHTML = `
    <h2>Own Your Voice,<br />Empower Your Creativity</h2>
    <p>
      Empowering Creators with Decentralization and Direct Monetization
    </p>`;

  bannerDesc.appendChild(btnDiv);

  const bannerImg = document.createElement("div");
  bannerImg.classList.add("banner-img");

  bannerImg.innerHTML = `<img src="${image}" alt="banner image" />`;

  banner.appendChild(bannerDesc);
  banner.appendChild(bannerImg);

  join.addEventListener('click', (e) => {
    if (e.target.classList.contains('create')) {
      loadPage(Create())
    }
  })
  exploreBlogs.addEventListener("click", () => {
    loadPage(Explore());
  });

  return banner;
};

export { Banner };
