const HowItWorks = () => {
  const howItWorks = document.createElement("div");
  howItWorks.classList.add("how", "main-container");
  howItWorks.id = 'how-it-works'

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

export { HowItWorks };
