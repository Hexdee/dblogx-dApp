const Wallet = () => {
  const wallet = document.createElement("div");
  wallet.classList.add("wallet", "container");
  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo-div");
  const logo = document.createElement("h2");
  logo.textContent = "DBlogX";
  logo.classList.add("logo");

  const logoText = document.createElement("p");
  logoText.textContent = "Wallet";
  logoDiv.appendChild(logo);
  logoDiv.appendChild(logoText);

  const walletDeets = document.createElement("div");
  walletDeets.classList.add("wallet-deets", "container");

  const readEarnings = document.createElement("div");
  readEarnings.classList.add("deet");

  const topDeet = document.createElement("div");
  topDeet.classList.add("top-deet");

  const earningsHead = document.createElement("p");
  earningsHead.classList.add("head");
  earningsHead.textContent = "Earnings from read";

  const earningsAmount = document.createElement("h2");
  earningsAmount.textContent = "$0.37";

  const earningsSub = document.createElement("p");
  earningsSub.classList.add("sub");
  earningsSub.textContent = "85 reads";

  const lowDeet = document.createElement("div");
  lowDeet.classList.add("low-deet");

  const statsLink = document.createElement("p");
  statsLink.textContent = "Go to stats";

  // Appending elements
  topDeet.appendChild(earningsHead);
  topDeet.appendChild(earningsAmount);
  topDeet.appendChild(earningsSub);

  lowDeet.appendChild(statsLink);

  readEarnings.appendChild(topDeet);
  readEarnings.appendChild(lowDeet);

  const withdrawn = document.createElement("div");
  withdrawn.classList.add("deet");

  const withdrawnTop = document.createElement("div");
  withdrawnTop.classList.add("top-deet");

  const withdrawnHead = document.createElement("p");
  withdrawnHead.classList.add("head");
  withdrawnHead.textContent = "Withdrawn";

  const withdrawnAmount = document.createElement("h2");
  withdrawnAmount.textContent = "$0.00";

  const withdrawnSub = document.createElement("p");
  withdrawnSub.classList.add("sub");
  withdrawnSub.textContent = "0 withdrawal";

  const withdrawnlowDeet = document.createElement("div");
  withdrawnlowDeet.classList.add("low-deet");

  const howToLink = document.createElement("p");
  howToLink.textContent = "How to withdraw";

  // Appending elements
  withdrawnTop.appendChild(withdrawnHead);
  withdrawnTop.appendChild(withdrawnAmount);
  withdrawnTop.appendChild(withdrawnSub);

  withdrawnlowDeet.appendChild(howToLink);

  withdrawn.appendChild(withdrawnTop);
  withdrawn.appendChild(withdrawnlowDeet);

  const balance = document.createElement("div");
  balance.classList.add("deet");

  const balanceTop = document.createElement("div");
  balanceTop.classList.add("top-deet");

  const balanceHead = document.createElement("p");
  balanceHead.classList.add("head");
  balanceHead.textContent = "Current balance";

  const balanceAmount = document.createElement("h2");
  balanceAmount.textContent = 30.37;

  const balanceSub = document.createElement("p");
  balanceSub.classList.add("sub");
  balanceSub.textContent = "available to withdraw";

  const balancelowDeet = document.createElement("div");
  balancelowDeet.classList.add("low-deet");

  const dashboard = document.createElement("p");
  dashboard.textContent = "ICP dashboard";
  const withdrawBtn = document.createElement("button");
  withdrawBtn.classList.add("btn", "btn-colored");
  withdrawBtn.textContent = `Withdraw $ ${balanceAmount.textContent}`;

  // Appending elements
  balanceTop.appendChild(balanceHead);
  balanceTop.appendChild(balanceAmount);
  balanceTop.appendChild(balanceSub);

  balancelowDeet.appendChild(dashboard);
  balancelowDeet.appendChild(withdrawBtn);

  balance.appendChild(balanceTop);
  balance.appendChild(balancelowDeet);

  walletDeets.appendChild(readEarnings);
  walletDeets.appendChild(withdrawn);
  walletDeets.appendChild(balance);

  wallet.appendChild(logoDiv);
  wallet.appendChild(walletDeets);

  return wallet;
};

export { Wallet };
