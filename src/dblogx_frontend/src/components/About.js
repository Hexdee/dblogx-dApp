const About = () => {
  const about = document.createElement("div");
  about.classList.add("about", "main-container");
  about.id = 'about'

  about.innerHTML = `
    <div>
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

export { About };
