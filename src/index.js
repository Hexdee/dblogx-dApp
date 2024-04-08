import {
  showBanner,
  showAbout,
  showFeatured,
  showHow,
  showTopCreators,
  showLowerSection,
  showConnect,
} from "./main";
import icpLogo from "./icp-logo.svg";
import image from "./image.png";
import "quill/dist/quill.snow.css";
import "./index.css";
import { addToData } from "./manageData";
import { getAllPosts, resetCurrentIndex } from "./allPosts";
import Quill from "quill";

let isConnected = false;

const connectToIcp = () => {
  const connectDrop = document.createElement("div");
  connectDrop.classList.add("connect-drop", "container");

  const connectAnchor = document.createElement("a");
  connectAnchor.href = "#";

  const connectImg = document.createElement("img");
  connectImg.src = icpLogo;
  connectImg.width = "30";
  connectImg.alt = "icp-logo";

  const connectText = document.createElement("p");
  connectText.textContent = "Connect with Internet Identity";

  connectAnchor.appendChild(connectImg);
  connectAnchor.appendChild(connectText);
  connectDrop.appendChild(connectAnchor);

  connectAnchor.addEventListener("click", (e) => {
    e.preventDefault();
    const signup = document.querySelector("#connect");
    const userImage = document.querySelector(".profile-img");
    if (signup) {
      signup.style.display = "none";
      userImage.style.display = "block";
    }

    //   isConnected = true;
    showConnect();
  });

  return { connectDrop };
};

const createNavigation = () => {
  const navLinks = document.createElement("div");
  navLinks.classList.add("nav-links");

  const ul = document.createElement("ul");

  const links = ["Home", "Explore", "About", "How it Works"];
  links.forEach((linkText) => {
    const li = document.createElement("li");
    li.classList.add("link");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = linkText;
    li.appendChild(a);
    ul.appendChild(li);
  });

  navLinks.appendChild(ul);

  return navLinks;
};

const createUserSection = () => {
  const connectSearch = document.createElement("div");
  connectSearch.classList.add("connect-search");

  const profBack = document.createElement("div");
  const profile = document.createElement("div");
  const name = document.createElement("p");
  const topProfile = document.createElement("div");
  const downProfile = document.createElement("div");

  const mail = document.createElement("p");
  const btn = document.createElement("a");
  btn.href = "";

  const profileNavs = document.createElement("ul");
  profileNavs.classList.add("profile-navs");
  profileNavs.innerHTML = `<li><a href="" id="new">create post</a></li>
    <li class="active"><a href="">Wallet</a></li>
    <li><a href="">Stats</a></li>
    <li><a href="">Subscription</a></li>
    <li><a href="">Settings</a></li>
    <li id="disconnect"><a href="">DIsConnect</a></li>`;

  profBack.classList.add("prof-back");
  profile.classList.add("profile-drop");
  topProfile.classList.add("name-mail-btn");
  name.classList.add("name");
  downProfile.classList.add("profile-links");
  btn.classList.add("btn", "btn-colored");

  name.textContent = "Esther Howard";
  mail.textContent = "estherhoward@gmail.com";
  btn.textContent = "View profile";

  topProfile.appendChild(name);
  topProfile.appendChild(mail);
  topProfile.appendChild(btn);

  downProfile.appendChild(profileNavs);

  profile.appendChild(topProfile);
  profile.appendChild(downProfile);
  profBack.appendChild(profile);

  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fa-solid", "fa-magnifying-glass", "search");

  const signUpAnchor = document.createElement("a");
  signUpAnchor.href = "";
  signUpAnchor.classList.add("sign-up");
  signUpAnchor.id = "connect";
  signUpAnchor.textContent = "Connect";

  const userImage = document.createElement("div");
  userImage.classList.add("profile-img");
  const userImageSrc = new Image();
  userImageSrc.src = image;
  userImageSrc.id = "profile-img";

  userImage.appendChild(userImageSrc);
  connectSearch.appendChild(searchIcon);
  connectSearch.appendChild(signUpAnchor);
  connectSearch.appendChild(userImage);

  signUpAnchor.addEventListener("click", (e) => {
    e.preventDefault();
    showConnect();
  });

  userImage.addEventListener("click", (e) => {
    profBack.classList.toggle("show");
  });

  return { connectSearch, profileNavs, profBack, userImage, signUpAnchor };
};
const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add("container", "header");

  // Navigation
  const navbarHeader = document.createElement("nav");
  navbarHeader.classList.add("navbar-header");

  const logo = document.createElement("h1");
  logo.classList.add("logo");
  logo.textContent = "DBlogX";

  const connectDrop = connectToIcp();
  const navLinks = createNavigation();
  const userSection = createUserSection();

  navbarHeader.appendChild(logo);
  navbarHeader.appendChild(navLinks);
  navbarHeader.appendChild(userSection.connectSearch);
  navbarHeader.appendChild(userSection.profBack);

  header.appendChild(connectDrop.connectDrop);
  header.appendChild(navbarHeader);

  return header;
};

const createMain = () => {
  const main = document.createElement("main");

  const bannerSection = showBanner();
  const aboutSection = showAbout();
  const featuredSection = showFeatured();
  const howItWorks = showHow();
  const topCreatorsSection = showTopCreators();
  const lowerSection = showLowerSection();

  main.appendChild(bannerSection.banner);
  main.appendChild(aboutSection);
  main.appendChild(featuredSection.featuredContent);
  main.appendChild(howItWorks);
  main.appendChild(topCreatorsSection);
  main.appendChild(lowerSection.lower);

  bannerSection.bannerDesc.addEventListener("click", (e) => {
    if (e.target.id === "show-blogs") {
      e.preventDefault();
      main.innerHTML = "";
      main.appendChild(getAllPosts());
    }
  });

  featuredSection.exploreMoreBtn.addEventListener('click', (e) => {
    e.preventDefault()
    main.innerHTML = ''
    main.appendChild(getAllPosts())
  })
  lowerSection.signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showConnect();
  });

  return main;
};

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.innerHTML = `
          <div class="foot main-container row">
              <div class="brand">
                  <h1 class="logo">DBlogX</h1>
                  <p>
                      Empowering Creators with Decentralization and Direct Monetization
                  </p>
                  <div class="socials">
                      <a href="#"><i class="fa-brands fa-square-x-twitter"></i></a>
                      <a href="#"><i class="fa-brands fa-discord"></i></a>
                      <a href="#"><i class="fa-brands fa-telegram"></i></a>
                      <a href="#"><i class="fa-brands fa-medium"></i></a>
                  </div>
              </div>
              <div class="quick-links">
                  <h3>Quick Links</h3>
                  <ul>
                      <li><a href="#">Explore</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">How it works</a></li>
                      <li><a href="#">Create</a></li>
                  </ul>
              </div>
              <div class="company">
                  <h3>Company</h3>
                  <ul>
                      <li><a href="#">Terms of Service</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                  </ul>
              </div>
              <div class="support">
                  <h3>Support</h3>
                  <ul>
                      <li><a href="#">Help</a></li>
                  </ul>
              </div>
          </div>
      `;

  return footer;
};

const renderHomePage = () => {
  const header = createHeader();
  const main = createMain();
  const footer = createFooter();

  document.body.appendChild(header);
  document.body.appendChild(main);
  document.body.appendChild(footer);
};

renderHomePage();

const profileNavs = document.querySelector(".profile-navs");
profileNavs.addEventListener("click", (e) => {
  if (e.target.id === "new") {
    e.preventDefault();
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.innerHTML = "";
    }
    const footer = document.querySelector("footer");
    if (footer) {
      document.body.removeChild(footer);
    }
    // profBack.classList.remove("show");
    // navLinks.style.display = "none";

    // Create form element
    const form = document.createElement("form");

    // Create input for title
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("required", "true");
    titleInput.setAttribute("placeholder", "Title");
    form.appendChild(titleInput);

    // Create input for image URL
    const imageUrlInput = document.createElement("input");
    imageUrlInput.setAttribute("type", "url");
    imageUrlInput.setAttribute("name", "image-url");
    imageUrlInput.setAttribute("id", "image-url");
    imageUrlInput.setAttribute("placeholder", "Image URL");
    form.appendChild(imageUrlInput);

    // Create textarea for content
    const editorContainer = document.createElement('div')
    editorContainer.classList.add('editor-cont')
    const editor = document.createElement("div");
    editorContainer.appendChild(editor)
    editor.id = "editor"
    form.appendChild(editorContainer);

    const options = {
      debug: 'info',
      modules: {
        toolbar: true,
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    };
    const quill = new Quill(editor, options);

    // Initialize quill editor

    // Create div for buttons
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add('btn-div')

    // Create publish button
    const publishButton = document.createElement("button");
    publishButton.setAttribute("type", "submit");
    publishButton.classList.add("btn", "btn-colored");
    publishButton.textContent = "Publish";
    buttonDiv.appendChild(publishButton);

    // Create cancel button
    const cancelButton = document.createElement("a");
    cancelButton.setAttribute("href", "#");
    cancelButton.classList.add("btn");
    cancelButton.textContent = "Cancel";
    buttonDiv.appendChild(cancelButton);

    // Append button div to form
    form.appendChild(buttonDiv);

    // Append form to the document body
    mainElement.appendChild(form);

    // Assuming quill is your Quill instance
const quillRoot = document.querySelector('.ql-editor'); // Get the Quill editor's root element
const htmlContent = quillRoot.innerHTML; // Get the HTML content of the Quill editor


// Add submit event listener to the form
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission behavior
      console.log(quill.clipboard.convert(quill.getContents()));
      // Get form inputs
      const title = titleInput.value;
      const imageUrl = imageUrlInput.value;
      const delta = quill.getContents();
      const content = editor.innerHTML

      const newContent = {
        about: "This is a Sample about",
        postImg: imageUrl,
        title: title,
        content: content,
        authorImg:
          "https://assets-global.website-files.com/606a802fcaa89bc357508cad/65c0f97a1835d6213299c8c5_Boosting%20your%20freelancing%20game_%20AI%20tools%20for%20enhanced%20efficiency.jpg",
        authorName: "New Author",
        date: "June 12, 2021",
        categories: ["New Post"],
        comments: [],
      };

      addToData(newContent);

      resetCurrentIndex();

      document.body.innerHTML = "";
      form.reset();
      renderHomePage();
    });

    cancelButton.addEventListener("click", function (event) {
      event.preventDefault();
    });
  }
});
