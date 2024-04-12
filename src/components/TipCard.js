const TipCard = (post) => {
  // Create the dialog element
  const dialog = document.createElement("dialog");

  // Create the tip container
  const tipContainer = document.createElement("div");
  tipContainer.classList.add("tip-container");

  const cancelTip = document.createElement("div");
  cancelTip.classList.add("cancel-tip");
  cancelTip.textContent = "X";

  cancelTip.addEventListener("click", () => dialog.close());

  // Create the image container
  const imgNameContainer = document.createElement("div");
  imgNameContainer.classList.add("img-name");
  const img = document.createElement("img");
  img.classList.add("img");
  img.src = post.authorImg;
  const imgName = document.createElement("p");
  imgName.textContent = post.authorName;
  imgNameContainer.appendChild(img);
  imgNameContainer.appendChild(imgName);

  // Create the tip card
  const tipCard = document.createElement("div");
  tipCard.classList.add("tip-card");
  const textsContainer = document.createElement("div");
  textsContainer.classList.add("texts");

  textsContainer.innerHTML = `<p style="font-weight: 600; color: #ffffff;">Send me a tip</p>
        <p style="font-size: .85rem; color: #FFFFFFCC; font-weight: 400;">Support ${post.authorName} with a small one-off tip.</p>
        <p style="font-size: .85rem; color: #FFFFFFCC; font-weight: 400;">Why tipping?</p>`;

  const tipAmountsContainer = document.createElement("div");
  tipAmountsContainer.classList.add("tip-amount");

  const price1 = document.createElement("p");
  price1.classList.add("btn");
  price1.textContent = `$1`;

  const price2 = document.createElement("p");
  price2.classList.add("btn");
  price2.textContent = `$2`;

  const price3 = document.createElement("p");
  price3.classList.add("btn");
  price3.textContent = `$3`;

  const price4 = document.createElement("p");
  price4.classList.add("btn");
  price4.textContent = `$5`;

  const price5 = document.createElement("p");
  price5.classList.add("btn");
  price5.textContent = `$10`;

  const price6 = document.createElement("p");
  price6.classList.add("btn");
  price6.textContent = `$20`;

  tipAmountsContainer.appendChild(price1);
  tipAmountsContainer.appendChild(price2);
  tipAmountsContainer.appendChild(price3);
  tipAmountsContainer.appendChild(price4);
  tipAmountsContainer.appendChild(price5);
  tipAmountsContainer.appendChild(price6);

  const btnColored = document.createElement("button");
  btnColored.classList.add("btn", "btn-colored");
  btnColored.textContent = "Send Tip";
  tipCard.appendChild(textsContainer);
  tipCard.appendChild(tipAmountsContainer);
  tipCard.appendChild(btnColored);

  // Append all elements to the dialog
  tipContainer.appendChild(cancelTip);
  tipContainer.appendChild(imgNameContainer);
  tipContainer.appendChild(tipCard);
  dialog.appendChild(tipContainer);

  document.body.appendChild(dialog);

  return dialog;
};

export { TipCard };
