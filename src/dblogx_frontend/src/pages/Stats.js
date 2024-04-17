import '../stats.css'
const Stats = () => {
  const stats = document.createElement("div");
  stats.classList.add("stats", "container");

  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo-div");
  const logo = document.createElement("h2");
  logo.textContent = "DBlogX";
  logo.classList.add("logo");

  const logoText = document.createElement("p");
  logoText.textContent = "Wallet";
  logoDiv.appendChild(logo);
  logoDiv.appendChild(logoText);

  const gridCont = document.createElement("div");
  gridCont.classList.add("grid-cont");
  gridCont.innerHTML = `  <div class="top-grid">
  <div>
    <p>Followers</p>
    <h2>0</h2>
  </div>
  <div>
    <p>Following</p>
    <h2>32</h2>
  </div>
</div>
<div class="low-grid">
  <div class="deet">
    <p>Total reads</p>
    <h2>0</h2>
    <p>All time</p>
  </div>
  <div class="deet">
    <p>Reads last 30 days</p>
    <h2>0</h2>
    <p>reads prior 30 days</p>
  </div>
  <div class="deet">
    <p>% change</p>
    <h2>0%</h2>
    <p>compared to prev. 30 days</p>
  </div>
  <div class="deet">
    <p>Earnings from reads</p>
    <h2>$30.37</h2>
    <p class="go">Go to wallet</p>
  </div>
</div>`;

  stats.appendChild(logoDiv);
  stats.appendChild(gridCont);

  return stats;
};

export { Stats };
