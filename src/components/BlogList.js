import { loadPage } from "..";
import { PostPage } from "../pages/PostPage";

const BlogList = (parent, blogs, endIndex) => {
  for (let i = 0; i < endIndex; i++) {
    if (i >= blogs.length) break;
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `
          <div class="post-img">
              <img src="${blogs[i].postImg}" alt="" />
          </div>
          <div class="post-details">
              <div class="title-desc">
                  <h3 class="title">${blogs[i].title}</h3>
                  <p class="desc">${blogs[i].content.slice(0, 150)}</p>
              </div>
              <div class="author">
                  <img src="${blogs[i].authorImg}" alt="" />
                  <p class="name">${blogs[i].authorName}</p>
                  <p class="date">${blogs[i].date}</p>
              </div>
              </div>`;
    parent.appendChild(post);

    post.addEventListener('click', ()=> {
      loadPage(PostPage(blogs[i].id))
    })
  }
};

export { BlogList };
