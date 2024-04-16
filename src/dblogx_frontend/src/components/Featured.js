
import { loadPage } from "..";
import { Explore } from "../pages/Explore";
import { RenderBlog } from "./RenderBlog";

const Featured = () => {
  const featuredContainer = document.createElement("div");
  featuredContainer.classList.add("featured-content", "main-container");

  const featuredHeader = document.createElement("h2");
  featuredHeader.textContent = "Featured Content";

  const posts = document.createElement("div");
  posts.classList.add("row", "posts");

  const exploreMoreBtn = document.createElement("button");
  exploreMoreBtn.classList.add("btn", "btn-colored");
  exploreMoreBtn.id = "load-more";
  exploreMoreBtn.textContent = "Explore more content";
  posts.innerHTML = "Loading...";
  RenderBlog(posts, 3);
  featuredContainer.appendChild(featuredHeader);
  featuredContainer.appendChild(posts);
  featuredContainer.appendChild(exploreMoreBtn);

  exploreMoreBtn.addEventListener("click", () => {
    loadPage(Explore());
  });

  return featuredContainer;
};

export { Featured };
