// import './blog.css'

export const GetPost = (main, post) => {
    main.innerHTML = "";
    const container = document.createElement("div");
    const mainPost = document.createElement("div");
  
    container.classList.add("container");
    mainPost.classList.add("main-post");
  
    const result = () => {
      const title = document.createElement("h2");
  
      const authorProfile = document.createElement("div");
      const author = document.createElement("div");
      const authorImg = document.createElement("div");
      const authorImgSrc = new Image();
      const nameDate = document.createElement("div");
      const authorName = document.createElement("p");
      const postDate = document.createElement("p");
      const follow = document.createElement("div");
      const followIcon = document.createElement("i");
      const followText = document.createElement("p");
  
      const topIcons = document.createElement("div");
      const likeComment = document.createElement("div");
      const likeDiv = document.createElement("div");
      const likeText = document.createElement("div");
      const likeIcon = document.createElement("i");
      const commentDiv = document.createElement("div");
      const commentText = document.createElement("div");
      const commentIcon = document.createElement("i");
      const bookShareTip = document.createElement("div");
      const bookmarkIcon = document.createElement("i");
      const shareIcon = document.createElement("i");
      const gratipayIcon = document.createElement("i");
  
      const postImg = document.createElement("div");
      const postImgSrc = new Image();
      const article = document.createElement("article");
  
      const categoryTab = document.createElement("div");
  
      title.classList.add("title");
      authorProfile.classList.add("author-profile");
      author.classList.add("author");
      authorImg.classList.add("img");
      nameDate.classList.add("name-date");
      authorName.classList.add("name");
      postDate.classList.add("date");
      follow.classList.add("follow");
      followIcon.classList.add("fa-solid", "fa-user-plus");
  
      topIcons.classList.add("top-icons");
      likeComment.classList.add("like-comment");
      likeDiv.classList.add("like");
      likeIcon.classList.add("fa-regular", "fa-thumbs-up");
      commentDiv.classList.add("comment");
      commentIcon.classList.add("fa-regular", "fa-comment");
      bookShareTip.classList.add("book-share-tip");
      bookmarkIcon.classList.add("fa-regular", "fa-bookmark");
      shareIcon.classList.add("fa-regular", "fa-share-from-square");
      gratipayIcon.classList.add("fa-brands", "fa-gratipay");
  
      postImg.classList.add("post-img");
      article.classList.add("post-article");
      categoryTab.classList.add("category-tab");
  
      authorImgSrc.src = post.authorImg;
      title.textContent = post.title;
      authorName.textContent = post.authorName;
      postDate.textContent = post.date;
      followText.textContent = "Follow";
  
      likeText.textContent = "5x";
      commentText.textContent = "100";
  
      postImgSrc.src = post.postImg;
      article.innerHTML = post.content;
  
      nameDate.appendChild(authorName);
      nameDate.appendChild(postDate);
      authorImg.appendChild(authorImgSrc);
      author.appendChild(authorImg);
      author.appendChild(nameDate);
      follow.appendChild(followIcon);
      follow.appendChild(followText);
  
      authorProfile.appendChild(author);
      authorProfile.appendChild(follow);
  
      likeDiv.appendChild(likeIcon);
      likeDiv.appendChild(likeText);
      commentDiv.appendChild(commentIcon);
      commentDiv.appendChild(commentText);
      likeComment.appendChild(likeDiv);
      likeComment.appendChild(commentDiv);
  
      bookShareTip.appendChild(bookmarkIcon);
      bookShareTip.appendChild(shareIcon);
      bookShareTip.appendChild(gratipayIcon);
      topIcons.appendChild(likeComment);
      topIcons.appendChild(bookShareTip);
  
      postImg.appendChild(postImgSrc);
  
      post.categories.forEach((tag) => {
        const tagElement = document.createElement("p");
        tagElement.textContent = tag;
        categoryTab.appendChild(tagElement);
      });
  
      const subDiv = document.createElement("div");
      const authorComment = document.createElement("div");
      const authorDetails = document.createElement("div");
      const writer = document.createElement("div");
      const writerDiv = document.createElement("div");
      const authorWrite = document.createElement("p");
      const authorRole = document.createElement("p");
  
      subDiv.classList.add("sub");
      authorComment.classList.add("author-comment");
      authorDetails.classList.add("author-deets");
      authorWrite.classList.add("written");
      writerDiv.classList.add("writer");
      writer.classList.add("author");
  
      authorWrite.textContent = "WRITTEN BY";
      authorRole.textContent = post.about;
  
      writerDiv.appendChild(authorWrite);
      writerDiv.appendChild(authorName);
      writer.appendChild(authorImg);
      writer.appendChild(writerDiv);
  
      authorDetails.appendChild(writer);
      authorDetails.appendChild(authorRole);
      authorComment.appendChild(authorDetails);
  
      const commentsDiv = document.createElement("div");
      const head = document.createElement("p");
      const respondButton = document.createElement("a");
      const imgTextBtn = document.createElement("div");
      const imgText = document.createElement("div");
  
      commentsDiv.classList.add("comments");
      respondButton.classList.add("btn", "btn-colored");
      imgTextBtn.classList.add("img-text-btn");
      imgText.classList.add("img-text");
  
      respondButton.setAttribute("href", "#");
      respondButton.textContent = "Respond";
      head.textContent = "Join the conversation";
      imgText.innerHTML = `<div class="img"><i class="fa-solid fa-user"></i></div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Comment"
      ></textarea>`;
      let current = 0;
  
      imgTextBtn.appendChild(imgText);
      imgTextBtn.appendChild(respondButton);
      commentsDiv.appendChild(head);
      commentsDiv.appendChild(imgTextBtn);
  
      authorComment.appendChild(authorDetails);
      authorComment.appendChild(commentsDiv);
  
      subDiv.appendChild(authorComment);
      container.appendChild(subDiv);
  
      const morePostDiv = document.createElement("div");
      morePostDiv.innerHTML = `<div class="more-post">
      <p>More from Esther</p>
      <div class="row posts"></div>
      </div>`;
  
      mainPost.appendChild(title);
      mainPost.appendChild(authorProfile);
      mainPost.appendChild(topIcons);
      mainPost.appendChild(postImg);
      mainPost.appendChild(article);
      mainPost.appendChild(categoryTab);
  
      subDiv.appendChild(authorComment);
      container.appendChild(mainPost);
      container.appendChild(subDiv);
      container.appendChild(morePostDiv);
      main.appendChild(container);
  
      const posts = document.querySelector(".posts");
      const getMoreBlogs = (count) => {
        getData()
          .then((response) => {
            const end = current + count;
            const filteredResponse = response.filter(
              (data) => data.authorName === authorName.textContent
            );
            for (let i = current; i < end; i++) {
              if (i >= filteredResponse.length) break; // Exit loop if we reach end of response
              const post = document.createElement("div");
              post.classList.add("post");
              post.innerHTML = `<div class="post-img"><img src="${
                response[i].postImg
              }" alt="" /></div>
                <div class="post-details">
                  <div class="title-desc">
                    <h3 class="title">
                      ${filteredResponse[i].title}
                    </h3>
                    <p class="desc">
                      ${filteredResponse[i].content.slice(0, 150)}
                    </p>
                  </div>
                  <div class="author">
                    <img src="${filteredResponse[i].authorImg}" alt="" />
                    <p class="name">${filteredResponse[i].authorName}</p>
                    <p class="date">${filteredResponse[i].date}</p>
                  </div>
                </div>`;
  
              posts.appendChild(post);
  
              post.addEventListener("click", (e) => {
                e.preventDefault();
                loadPost(response[i]).result();
              });
            }
            current = end; // Update current index
          })
          .catch((e) => {
            console.log("Error fetching data: ", e);
          });
      };
  
      getMoreBlogs(2);
  
      // return main;
    };
    return { result };
  };