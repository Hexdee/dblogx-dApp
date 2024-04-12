import { handleConnect } from "..";

const LowerSection = () => {
  const lower = document.createElement("div");
  lower.classList.add("lower", "container");

  const lowerTitle = document.createElement("h2");
  lowerTitle.textContent = "Join DBlogX Today";

  const lowerText = document.createElement("p");
  lowerText.textContent =
    "Ready to experience true ownership and direct monetization? Sign up now and become a part of the decentralized blogging revolution";

  const signUpBtn = document.createElement("button");
  signUpBtn.classList.add("btn", "btn-colored", "sign-up");
  signUpBtn.textContent = "Connect Now";

  lower.appendChild(lowerTitle);
  lower.appendChild(lowerText);
  lower.appendChild(signUpBtn);

  return lower;
};

export { LowerSection };
