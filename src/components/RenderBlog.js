import { FetchData } from "../fetches/FetchData";
import { BlogList } from "./BlogList";

const RenderBlog = (posts, endIndex) => {
  const blogs = FetchData("http://localhost:8000/blogs");
  blogs
    .then((response) => {
      posts.innerHTML = "";
      BlogList(posts, response, endIndex);
    })
    .catch((error) => {
      posts.innerHTML = error.message;
    });
};

export { RenderBlog };
