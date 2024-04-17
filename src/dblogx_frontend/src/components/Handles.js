const Handles = () => {
  const handles = document.createElement("div");
  handles.classList.add("handles", "container");
  handles.innerHTML = `<h3>Let's connect</h3>
    <div class="socials">
      <a href=""><i class="fa-brands fa-instagram"></i></a>
      <a href=""><i class="fa-brands fa-x-twitter"></i></a>
      <a href=""><i class="fa-brands fa-tiktok"></i></a>
      <a href=""><i class="fa-brands fa-linkedin"></i></a>
    </div>`;

  return handles;
};

export { Handles };
