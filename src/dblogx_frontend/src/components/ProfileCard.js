import { loadPage } from "..";
import { Create } from "../pages/Create";

const ProfileCard = () => {
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
  const create = document.createElement('li')
  const wallet = document.createElement('li')
  const stats = document.createElement('li')
  const subscription = document.createElement('li')
  const settings = document.createElement('li')
  const disconnect = document.createElement('li')

  create.innerHTML = '<a href="" id="new">create post</a>'
  wallet.innerHTML = '<a href="">Wallet post</a>'
  stats.innerHTML = '<a href="">Stats post</a>'
  subscription.innerHTML = '<a href="">Subscription post</a>'
  settings.innerHTML = '<a href="">Settings post</a>'
  disconnect.innerHTML = '<a href="">Disconnect</a>'

  profileNavs.appendChild(create)
  profileNavs.appendChild(wallet)
  profileNavs.appendChild(stats)
  profileNavs.appendChild(subscription)
  profileNavs.appendChild(settings)
  profileNavs.appendChild(disconnect)

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

  create.addEventListener('click', (e) => {
    e.preventDefault()
    loadPage(Create())
    profBack.classList.remove('show')
  })

  return profBack;
};

export { ProfileCard };
