import { getMain } from "./main";
import { getFeaturedContents } from "./allPosts";
import "./index.css";
import icpLogo from "./icp-logo.svg";

const header = document.createElement("header");
header.classList.add("container", "header");

// Connect with Internet Identity
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
header.appendChild(connectDrop);

// Navigation
const navbarHeader = document.createElement("nav");
navbarHeader.classList.add("navbar-header");

const logo = document.createElement("h1");
logo.classList.add("logo");
logo.textContent = "DBlogX";

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

const connectSearch = document.createElement("div");
connectSearch.classList.add("connect-search");

const searchIcon = document.createElement("i");
searchIcon.classList.add("fa-solid", "fa-magnifying-glass", "search");

const signUpAnchor = document.createElement("a");
signUpAnchor.href = "#";
signUpAnchor.classList.add("sign-up");
signUpAnchor.textContent = "Connect";

connectSearch.appendChild(searchIcon);
connectSearch.appendChild(signUpAnchor);

navbarHeader.appendChild(logo);
navbarHeader.appendChild(navLinks);
navbarHeader.appendChild(connectSearch);

header.appendChild(navbarHeader);

document.body.appendChild(header);

// Create footer
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

// Append footer to body
document.body.appendChild(getMain());

document.body.appendChild(footer);
