import { FetchData } from "../fetches/FetchData";
import { BlogList } from "./BlogList";

const GetRelatedPosts = (parent, endIndex, authorName2) => {
  const blogs = FetchData("http://localhost:8000/blogs");
  const filteredBlogs = blogs.then((res) => {
    return res.filter((info) => info.authorName === authorName2.textContent);
  });
  filteredBlogs
    .then((response) => {
      parent.innerHTML = "";
      BlogList(parent, response, endIndex);
    })
    .catch((error) => {
      parent.innerHTML = error.message;
    });
};

export default GetRelatedPosts;
