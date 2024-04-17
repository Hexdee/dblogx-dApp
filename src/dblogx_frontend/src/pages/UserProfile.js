import { Handles } from "../components/Handles";
import { ProfileBanner } from "../components/ProfileBanner";
import { RenderBlog } from "../components/RenderBlog";
import { TopProfile } from "../components/TopProfile";
import "../profile.css";

const UserProfile = () => {
  const topProfile = TopProfile()
  const handles = Handles()
  const userDiv = document.createElement("div");
  userDiv.classList.add("user-div");

  const posts = document.createElement("div");
  posts.classList.add("posts", "row" , "container");

  const topBanner = ProfileBanner();
  const stories = document.createElement('h3')
  stories.classList.add('stories', 'container')
  stories.textContent = 'Stories(3)'
  RenderBlog(posts, 3);

  userDiv.appendChild(topBanner);
  userDiv.appendChild(topProfile);
  userDiv.appendChild(handles);
  userDiv.appendChild(stories);
  userDiv.appendChild(posts);

  return userDiv;
};

export { UserProfile };
