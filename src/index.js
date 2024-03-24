const featuredContainer = document.querySelector(".posts");
const explore = document.getElementById('explore')
const signUp = document.querySelectorAll('.sign-up')

const getData = async () => {
  const contents = await fetch("./src/data.json", { mode: "cors" });
  const result = await contents.json();
  return result;
};

let currentIndex = 0; 
const getFeaturedContents = (count) => {
//   const createdPosts = []; // Array to keep track of created posts
  getData()
    .then((response) => {
      const endIndex = currentIndex + count;
      for (let i = currentIndex; i < endIndex; i++) {
        if (i >= response.length) break; // Exit loop if we reach end of response
        const post = document.createElement("div");
        post.classList.add("post");
        post.innerHTML = `<div class="post-img"><img src="${response[i].postImg}" alt="" /></div>
            <div class="post-details">
              <div class="title-desc">
                <h3 class="title">
                  ${response[i].title}
                </h3>
                <p class="desc">
                  ${response[i].content}
                </p>
              </div>
              <div class="author">
                <img src="${response[i].authorImg}" alt="" />
                <p class="name">${response[i].authorName}</p>
                <p class="date">${response[i].date}</p>
              </div>
            </div>`;

        // if (!createdPosts.includes(post)) {
          // Check if post is not already created
          featuredContainer.appendChild(post);
        //   createdPosts.push(post); // Add post to the list of created posts
        // } 
      }
      currentIndex = endIndex; // Update current index
    })
    .catch((e) => {
      console.log("Error fetching data: ", e);
    });
};

explore.addEventListener('click', (e) => {
    e.preventDefault();
    getFeaturedContents(3); // Fetch 3 more contents
});
signUp.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault()
        showConnect()
    })
})

const showConnect = () => {
    document.querySelector('.connect-drop').classList.toggle('show')
}
getFeaturedContents(3);
