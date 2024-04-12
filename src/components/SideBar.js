import { FetchData } from "../fetches/FetchData";

const SideBar = () => {
  const sidebar = document.createElement("div");
  const topbrand = document.createElement("div");
  const categories = document.createElement("div");
  const categTitle = document.createElement("h3");
  const catList = document.createElement("ul");

  sidebar.classList.add("sidebar");
  topbrand.classList.add("top-brand");
  categories.classList.add("categories");
  catList.classList.add("cat-list");

  topbrand.innerHTML = `
        <h2 class="logo">DBlogX</h2>
        <p>We empower creators with decentralization and direct monetization</p>
        <a href="#" class="btn btn-colored sign-up">Connect</a>`;

  categTitle.textContent = `CATEGORIES`;

  // Fetch data and populate categories
  FetchData("http://localhost:8000/blogs")
    .then(blogs => {
      const allCategories = [];
      for (let i = 0; i < blogs.length; i++) {
        for (let j of blogs[i].categories) {
          if (!allCategories.includes(j)) {
            allCategories.push(j);
          }
        }
      }
      allCategories.forEach((cat) => {
        const list = document.createElement("li");
        const listAnchor = document.createElement("a");
        list.classList.add("category");

        listAnchor.textContent = cat;
        list.appendChild(listAnchor);
        catList.appendChild(list);
      });

      const active = catList.querySelectorAll(".category");
      active[0].classList.add("active");

      categories.appendChild(categTitle);
      categories.appendChild(catList);
      sidebar.appendChild(topbrand);
      sidebar.appendChild(categories);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      // Handle error, e.g., display a message or fallback content
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Error fetching categories";
      sidebar.appendChild(errorMessage);
    });

  return sidebar;
};

export { SideBar };