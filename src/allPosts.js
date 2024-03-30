// import './posts.css'

// export const AllPost = (count) => {
//     main.innerHTML = "";
//     const allCategories = [];
//     const result = () => {
//       const gridContainer = document.createElement("div");
//       const sidebar = document.createElement("div");
//       const mainbar = document.createElement("div");

//       const topbrand = document.createElement("div");
//       const categories = document.createElement("div");
//       const categTitle = document.createElement("h3");
//       const catList = document.createElement("ul");
//       const toptab = document.createElement("div");
//       const posts = document.createElement("div");
//       const loadMoreBtn = document.createElement("a");

//       gridContainer.classList.add("container", "grid-container");
//       sidebar.classList.add("sidebar");
//       mainbar.classList.add("main-bar");
//       topbrand.classList.add("top-brand");
//       categories.classList.add("categories");
//       catList.classList.add("cat-list");
//       toptab.classList.add("top-tab");
//       posts.classList.add("row", "posts");
//       loadMoreBtn.classList.add("btn", "btn-colored");
//       loadMoreBtn.id = "explore";

//       loadMoreBtn.setAttribute("href", "#");

//       topbrand.innerHTML = `<h2 class="logo">DBlogX</h2>
//       <p>
//         We empower creators with decentralization and direct monetization
//       </p>
//       <a href="#" class="btn btn-colored sign-up">Connect</a>`;

//       toptab.innerHTML = `<ul>
//       <li><a href="" id="following" class="active">Following</a></li>
//       <li><a href="" id="trending">Trending</a></li>
//       <li><a href="" id="recent">Recent</a></li>
//       </ul>`;

//       categTitle.textContent = `CATEGORIES`;
//       loadMoreBtn.textContent = "Load more";

//       let current = 0;
//       getData().then((response) => {
//         let end = current + count;
//         for (let i = current; i < end; i++) {}
//       });

//       const getCat = async () => {
//         const response = await getData();
//         for (let i = 0; i < response.length; i++) {
//           for (let j of response[i].categories) {
//             if (!allCategories.includes(j)) {
//               allCategories.push(j);
//             }
//           }
//         }
//         return allCategories;
//       };

//       getCat()
//         .then((categories) => {
//           categories.forEach((cat) => {
//             const list = document.createElement("li");
//             const listAnchor = document.createElement("a");
//             list.classList.add("category", "active");

//             listAnchor.textContent = cat;
//             list.appendChild(listAnchor);
//             catList.appendChild(list);
//           });
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//         });

//       categories.appendChild(categTitle);
//       categories.appendChild(catList);
//       sidebar.appendChild(topbrand);
//       sidebar.appendChild(categories);
//       mainbar.appendChild(toptab);
//       mainbar.appendChild(posts);
//       mainbar.appendChild(loadMoreBtn);

//       gridContainer.appendChild(sidebar);
//       gridContainer.appendChild(mainbar);
//       main.appendChild(gridContainer);

//       let currentIndex = 0;
//       const getPosts = (count) => {
//         getData()
//           .then((response) => {
//             const endIndex = currentIndex + count;
//             for (let i = currentIndex; i < endIndex; i++) {
//               if (i >= response.length) break; // Exit loop if we reach end of response
//               const post = document.createElement("div");
//               post.classList.add("post");
//               post.innerHTML = `<div class="post-img"><img src="${
//                 response[i].postImg
//               }" alt="" /></div>
//               <div class="post-details">
//                 <div class="title-desc">
//                   <h3 class="title">
//                     ${response[i].title}
//                   </h3>
//                   <p class="desc">
//                     ${response[i].content.slice(0, 150)}
//                   </p>
//                 </div>
//                 <div class="author">
//                   <img src="${response[i].authorImg}" alt="" />
//                   <p class="name">${response[i].authorName}</p>
//                   <p class="date">${response[i].date}</p>
//                 </div>
//               </div>`;

//               posts.appendChild(post);

//               post.addEventListener("click", (e) => {
//                 e.preventDefault();
//                 loadPost(response[i]).result();
//               });
//             }
//             currentIndex = endIndex; // Update current index
//           })
//           .catch((e) => {
//             console.log("Error fetching data: ", e);
//           });
//       };

//       getPosts(3);
//     };
//     return { result };
//   };

import data from "./data.json";

const getData = async () => {
  const contents = await fetch(`${data}`, { mode: "cors" });
  const result = await contents.json();
  return result;
};

let currentIndex = 0;
const getFeaturedContents = (posts, count) => {
  const endIndex = currentIndex + count;
  for (let i = currentIndex; i < endIndex; i++) {
    if (i >= data.length) break; // Exit loop if we reach end of data
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `<div class="post-img"><img src="${
      data[i].postImg
    }" alt="" /></div>
                  <div class="post-details">
                    <div class="title-desc">
                      <h3 class="title">
                        ${data[i].title}
                      </h3>
                      <p class="desc">
                        ${data[i].content.slice(0, 150)}
                      </p>
                    </div>
                    <div class="author">
                      <img src="${data[i].authorImg}" alt="" />
                      <p class="name">${data[i].authorName}</p>
                      <p class="date">${data[i].date}</p>
                    </div>
                  </div>`;

    posts.appendChild(post);

    //   post.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     loadPost(response[i]).result();
    //   });
  }
  currentIndex = endIndex;
  return posts; // Update current index
};

export { getFeaturedContents };
