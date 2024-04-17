import { getConnected } from "..";
import logo from "../icp-logo.svg";
const Connect = () => {
  const connectDrop = document.createElement("div");
  connectDrop.classList.add("connect-drop", "container");

  const connectLink = document.createElement("a");
  connectLink.href = '#'
  const icpLogo = new Image();
  icpLogo.src = logo;
  icpLogo.width = 30

  const text = document.createElement("p");
  text.textContent = "Connect with Internet Identity";

  connectLink.appendChild(icpLogo);
  connectLink.appendChild(text);
  connectDrop.appendChild(connectLink);
  
  connectLink.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("connected");
    connectDrop.classList.remove('show')
    // loadPage(MainPage())
    getConnected()
  })

  return connectDrop;
};

export { Connect };
