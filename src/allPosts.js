import { showPostPage } from "./post";
import data from "./data.json";
import "./posts.css";

// TODO: Use synchronous code
const getData = async () => {
  const contents = await fetch(`${data}`, { mode: "cors" });
  const result = await contents.json();
  return result;
};

// Get posts from data
let currentIndex = 0;
const getFeaturedContents = (posts, count) => {
  const endIndex = currentIndex + count;
  for (let i = currentIndex; i < endIndex; i++) {
    if (i >= data.length) break; // Exit loop if we reach end of data
    const post = document.createElement("a");
    post.classList.add("post");
    post.href = `blogs/${data[i].id}`
    post.innerHTML = `<div class="post-img"><img src="${
      data[i].postImg
    }" alt="" /></div>
                  <div class="post-details">
                    <div class="title-desc">
                      <h3 class="title">
                        ${data[i].title}
                      </h3>
                      <p class="desc">
                        ${data[i].content.slice(0, 150)}
                      </p>
                    </div>
                    <div class="author">
                      <img src="${data[i].authorImg}" alt="" />
                      <p class="name">${data[i].authorName}</p>
                      <p class="date">${data[i].date}</p>
                    </div>
                  </div>`;

    posts.appendChild(post);

    post.addEventListener("click", (e) => {
      const main = document.querySelector('main')
      if (main) {
        e.preventDefault();
        main.innerHTML = ''
        main.appendChild(showPostPage(data[i]));
      }
    });
  }
  currentIndex = endIndex;
  return posts;
};

// Display All Posts
const getAllPosts = () => {
  currentIndex = 0;
  // main.innerHTML = "";
  const allCategories = [];

  const gridContainer = document.createElement("div");
  const sidebar = document.createElement("div");
  const mainbar = document.createElement("div");

  const topbrand = document.createElement("div");
  const categories = document.createElement("div");
  const categTitle = document.createElement("h3");
  const catList = document.createElement("ul");
  const toptab = document.createElement("div");
  const posts = document.createElement("div");
  const loadMoreBtn = document.createElement("button");

  gridContainer.classList.add("container", "grid-container");
  sidebar.classList.add("sidebar");
  mainbar.classList.add("main-bar");
  topbrand.classList.add("top-brand");
  categories.classList.add("categories");
  catList.classList.add("cat-list");
  toptab.classList.add("top-tab");
  posts.classList.add("row", "posts");
  loadMoreBtn.classList.add("btn", "btn-colored");
  loadMoreBtn.id = "explore";

  topbrand.innerHTML = `<h2 class="logo">DBlogX</h2>
      <p>
        We empower creators with decentralization and direct monetization
      </p>
      <a href="#" class="btn btn-colored sign-up">Connect</a>`;

  toptab.innerHTML = `<ul>
      <li><a href="" id="following" class="active">Following</a></li>
      <li><a href="" id="trending">Trending</a></li>
      <li><a href="" id="recent">Recent</a></li>
      </ul>`;

  categTitle.textContent = `CATEGORIES`;
  loadMoreBtn.textContent = "Load more";

  const getCat = () => {
    for (let i = 0; i < data.length; i++) {
      for (let j of data[i].categories) {
        if (!allCategories.includes(j)) {
          allCategories.push(j);
        }
      }
    }
    return allCategories;
  };

  getCat().forEach((cat) => {
    const list = document.createElement("li");
    const listAnchor = document.createElement("a");
    list.classList.add("category");

    listAnchor.textContent = cat;
    list.appendChild(listAnchor);
    catList.appendChild(list);
  });

  const active = catList.querySelectorAll(".category");
  active[0].classList.add("active");

  categories.appendChild(categTitle);
  categories.appendChild(catList);
  sidebar.appendChild(topbrand);
  sidebar.appendChild(categories);
  mainbar.appendChild(toptab);
  mainbar.appendChild(posts);
  mainbar.appendChild(loadMoreBtn);

  gridContainer.appendChild(sidebar);
  gridContainer.appendChild(mainbar);

  getFeaturedContents(posts, 4);

  loadMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getFeaturedContents(posts, 3);
  });

  return gridContainer
};

const resetCurrentIndex = () => {
  currentIndex = 0
}
export { getFeaturedContents, getAllPosts, resetCurrentIndex };
