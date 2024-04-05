import { getFeaturedContents, getAllPosts } from "./allPosts";
import image from "./image.png";

// Banner Section
const showBanner = () => {
  const banner = document.createElement("div");
  banner.classList.add("banner", "main-container");

  const bannerDesc = document.createElement("div");
  bannerDesc.classList.add("banner-desc");

  bannerDesc.innerHTML = `<h2>Own Your Voice,<br />Empower Your Creativity</h2>
<p>
  Empowering Creators with Decentralization and Direct Monetization
</p>
<div class="join-explore">
  <a href="#" class="join btn btn-colored">Join DBlogX</a>
  <a href="#" class="btn explore" id="show-blogs">Explore content</a>
</div>`;

  const bannerImg = document.createElement("div");
  bannerImg.classList.add("banner-img");

  bannerImg.innerHTML = `<img src="${image}" alt="banner image" />`;

  banner.appendChild(bannerDesc);
  banner.appendChild(bannerImg);

  return { banner, bannerDesc };
};

// About Section
const showAbout = () => {
  const about = document.createElement("div");
  about.classList.add("about", "main-container");

  about.innerHTML = `<div>
<h2>About DBlogX</h2>
<p>
  DBlogX is a revolutionary decentralized blogging platform built on
  the Internet Computer Protocol (ICP). We believe that creators
  deserve full ownership of their content and the freedom to monetize
  it directly. Our platform empowers you to express yourself freely,
  connect with a passionate community, and earn rewards for your work.
</p>
</div>`;

  return about;
};

// Featured Section
const showFeatured = () => {
  const featuredContent = document.createElement("div");
  featuredContent.classList.add("featured-content", "main-container");

  const featuredTitle = document.createElement("h2");
  featuredTitle.textContent = "Featured Content";

  const posts = document.createElement("div");
  posts.classList.add("row", "posts");

  const exploreMoreBtn = document.createElement("a");
  exploreMoreBtn.href = "explore";
  exploreMoreBtn.classList.add("btn", "btn-colored");
  exploreMoreBtn.id = "explore";
  exploreMoreBtn.textContent = "Explore more content";

  featuredContent.appendChild(featuredTitle);
  featuredContent.appendChild(posts);
  featuredContent.appendChild(exploreMoreBtn);

  getFeaturedContents(posts, 3);

  return { featuredContent, exploreMoreBtn };
};

// How it works Section
const showHow = () => {
  const howItWorks = document.createElement("div");
  howItWorks.classList.add("how", "main-container");

  const howTitle = document.createElement("h2");
  howTitle.textContent = "How It Works";

  const howRow = document.createElement("div");
  howRow.classList.add("row");

  howRow.innerHTML = `<div class="card">
<div class="icon-header-desc">
  <div class="icon"><i class="fa-solid fa-handshake"></i></div>
  <div class="header-desc">
    <h3>Sign Up Securely with ICP</h3>
    <p>
      No lengthy registration forms! Leverage your existing ICP
      Internet Identity for secure and easy signup on DBlogX.
    </p>
  </div>
</div>
<a href="#" class="btn btn-colored">Learn More</a>
</div>

<div class="card">
<div class="icon-header-desc">
  <div class="icon">
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
  <div class="header-desc">
    <h3>Discover & Follow</h3>
    <p>
      Explore a diverse range of content across various categories
      and find creators you resonate with. Follow them to stay
      updated on their latest posts.
    </p>
  </div>
</div>
<a href="#" class="btn btn-colored">Learn More</a>
</div>

<div class="card">
<div class="icon-header-desc">
  <div class="icon"><i class="fa-solid fa-plus"></i></div>
  <div class="header-desc">
    <h3>Create & Share</h3>
    <p>
      Unleash your creativity with our user-friendly blog post
      creation interface and craft compelling content.
    </p>
  </div>
</div>
<a href="#" class="btn btn-colored">Learn More</a>
</div>

<div class="card">
<div class="icon-header-desc">
  <div class="icon"><i class="fa-solid fa-comment"></i></div>
  <div class="header-desc">
    <h3>Engage & Connect</h3>
    <p>
      Join the conversation by leaving comments on posts you find
      interesting and upvote thoughtful comments to elevate valuable
      discussions within the community.
    </p>
  </div>
</div>
<a href="#" class="btn btn-colored">Learn More</a>
</div>

<div class="card">
<div class="icon-header-desc">
  <div class="icon">
    <i class="fa-solid fa-hand-holding-dollar"></i>
  </div>
  <div class="header-desc">
    <h3>Monetize Your Work (Optional)</h3>
    <p>
      Enable ICP tipping directly on your posts, allowing your
      audience to support your work financially. Place targeted
      advertisements within your content for a small fee (in ICP)
      and share revenue with DBlogX.
    </p>
  </div>
</div>
<a href="#" class="btn btn-colored">Learn More</a>
</div>

<div class="card">
<div class="icon-header-desc">
  <div class="icon">
    <i class="fa-solid fa-money-bill-transfer"></i>
  </div>
  <div class="header-desc">
    <h3>Withdraw & Earn</h3>
    <p>
      Seamlessly withdraw your ICP earnings from tips and
      advertisement revenue share directly to your ICP wallet.
    </p>
  </div>
</div>
<a href="#" class="btn btn-colored">Learn More</a>
</div>`;
  howItWorks.appendChild(howTitle);
  howItWorks.appendChild(howRow);

  return howItWorks;
};

// Top creators Section
const showTopCreators = () => {
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

// Lower Section
const showLowerSection = () => {
  const lower = document.createElement("div");
  lower.classList.add("lower");

  const lowerTitle = document.createElement("h2");
  lowerTitle.textContent = "Join DBlogX Today";

  const lowerText = document.createElement("p");
  lowerText.textContent =
    "Ready to experience true ownership and direct monetization? Sign up now and become a part of the decentralized blogging revolution";

  const signUpBtn = document.createElement("a");
  signUpBtn.href = "#";
  signUpBtn.classList.add("btn", "btn-colored", "sign-up");
  signUpBtn.textContent = "Connect Now";

  lower.appendChild(lowerTitle);
  lower.appendChild(lowerText);
  lower.appendChild(signUpBtn);

  return { lower, signUpBtn };
};

const showConnect = () => {
  document.querySelector(".connect-drop").classList.toggle("show");
};
export {
  showBanner,
  showAbout,
  showFeatured,
  showHow,
  showTopCreators,
  showLowerSection,
  showConnect,
};
