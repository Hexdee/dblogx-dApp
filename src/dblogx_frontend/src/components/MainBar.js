import { BlogList } from "./BlogList";
import { RenderBlog } from "./RenderBlog";

const MainBar = () => {
  let endIndex = 4;

  const mainbar = document.createElement("div");
  const toptab = document.createElement("div");
  const posts = document.createElement("div");
  const loadMoreBtn = document.createElement("button");

  mainbar.classList.add("main-bar");
  toptab.classList.add("top-tab");
  posts.classList.add("row", "posts");
  loadMoreBtn.classList.add("btn", "btn-colored");
  loadMoreBtn.id = "load-more";

  toptab.innerHTML = `
        <ul>
            <li><a href="" id="following" class="active">Following</a></li>
            <li><a href="" id="trending">Trending</a></li>
            <li><a href="" id="recent">Recent</a></li>
        </ul>`;

  loadMoreBtn.textContent = "Load more";

  mainbar.appendChild(toptab);
  mainbar.appendChild(posts);
  mainbar.appendChild(loadMoreBtn);
  RenderBlog(posts, endIndex);

  loadMoreBtn.addEventListener("click", () => {
    endIndex += 4;
    RenderBlog(posts, endIndex);
  });

  return mainbar;
};

export { MainBar };
