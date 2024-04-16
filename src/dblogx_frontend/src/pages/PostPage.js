import { FetchData } from "../fetches/FetchData";
import "../blog.css";
import GetRelatedPosts from "../components/GetrelatedPosts";
import { TipCard } from "../components/TipCard";

const PostPage = (id) => {
  const container = document.createElement("div");
  const authorName2 = document.createElement("p");
  FetchData("http://localhost:8000/blogs/" + id)
    .then((post) => {
      const mainPost = document.createElement("div");

      container.classList.add("container");
      mainPost.classList.add("main-post");

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

      container.classList.add("post-cont");
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
      authorName2.textContent = post.authorName;
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

      mainPost.appendChild(title);
      mainPost.appendChild(authorProfile);
      mainPost.appendChild(topIcons);
      mainPost.appendChild(postImg);
      mainPost.appendChild(article);
      mainPost.appendChild(categoryTab);

      const subDiv = document.createElement("div");
      const authorComment = document.createElement("div");
      const authorDetails = document.createElement("div");
      const writer = document.createElement("div");
      const writerDiv = document.createElement("div");
      const authorWrite = document.createElement("p");
      const authorRole = document.createElement("p");
      const authorImg2 = document.createElement("div");
      const authorImSrc2 = new Image();

      subDiv.classList.add("sub");
      authorComment.classList.add("author-comment");
      authorDetails.classList.add("author-deets");
      authorImg2.classList.add("img");
      authorWrite.classList.add("written");
      writerDiv.classList.add("writer");
      writer.classList.add("author");

      authorWrite.textContent = "WRITTEN BY";
      authorImSrc2.src = post.authorImg;
      authorRole.textContent = post.about;

      authorImg2.appendChild(authorImSrc2);
      writer.appendChild(authorImg2);
      writer.appendChild(writerDiv);
      writerDiv.appendChild(authorWrite);
      writerDiv.appendChild(authorName2);

      authorDetails.appendChild(writer);
      authorDetails.appendChild(authorRole);
      authorComment.appendChild(authorDetails);

      const commentsDiv = document.createElement("div");
      const head = document.createElement("p");
      const respondButton = document.createElement("a");
      const imgTextBtn = document.createElement("div");
      const imgText = document.createElement("div");

      const enjoyed = document.createElement("div");
      const enjoyHead = document.createElement("h3");
      const enjoyDesc = document.createElement("p");
      const enjoyBtn = document.createElement("div");

      const usersComments = document.createElement("div");

      commentsDiv.classList.add("comments");
      respondButton.classList.add("btn", "btn-colored");
      imgTextBtn.classList.add("img-text-btn");
      imgText.classList.add("img-text");

      enjoyed.classList.add("enjoy-card");
      enjoyHead.classList.add("enjoy-head");
      enjoyDesc.classList.add("enjoy-desc");
      enjoyBtn.classList.add("enjoy-btn");

      usersComments.classList.add("users-comments");

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

      enjoyHead.textContent = "Enjoyed the story? Support the Creator.";
      enjoyDesc.textContent =
        "Subscribe for free to receive all their stories in your feed. You could also pledge your support or give them a one-off tip, letting them know you appreciate their work.";
      enjoyBtn.innerHTML = `<button class="btn btn-colored">Subscribe For Free</button>
                          <button class="btn btn-colored">Pledge Your Support</button>
                          <button class="btn" id="give-tip">Give a Tip</button>`;

      const allComments = document.createElement("div");
      allComments.classList.add("all-comments");

      enjoyBtn.addEventListener("click", (e) => {
        if (e.target.id === "give-tip") {
          TipCard(post).showModal();
        }
      });

      const geAllComments = () => {
        post.comments.forEach((comment) => {
          const comm = document.createElement("div");
          const comAutPro = document.createElement("div");
          const comAutImg = document.createElement("div");
          const comAutNameDate = document.createElement("div");
          const img = new Image();
          const autName = document.createElement("p");
          const commDate = document.createElement("p");
          const commentTxt = document.createElement("p");

          comAutNameDate.classList.add("comment");
          comAutPro.classList.add("comment-author-profile");
          comAutImg.classList.add("comment-author-img");
          comAutNameDate.classList.add("comment-author-name-date");
          autName.classList.add("name");
          commDate.classList.add("date");
          comm.classList.add("comment-d");
          commentTxt.classList.add("comment-text");

          img.src = comment.authorImg;
          autName.textContent = comment.author;
          commDate.textContent = "about 1 hour ago";
          commentTxt.textContent = comment.message;

          comAutNameDate.appendChild(autName);
          comAutNameDate.appendChild(commDate);
          comAutImg.appendChild(img);
          comAutPro.appendChild(comAutImg);
          comAutPro.appendChild(comAutNameDate);
          comm.appendChild(comAutPro);
          comm.appendChild(commentTxt);
          allComments.appendChild(comm);
        });
        return allComments;
      };
      const topCommentTxt = document.createElement("p");
      topCommentTxt.textContent = `Comments (${post.comments.length})`;

      usersComments.appendChild(topCommentTxt);
      usersComments.appendChild(geAllComments());

      enjoyed.appendChild(enjoyHead);
      enjoyed.appendChild(enjoyDesc);
      enjoyed.appendChild(enjoyBtn);

      imgTextBtn.appendChild(imgText);
      imgTextBtn.appendChild(respondButton);
      commentsDiv.appendChild(head);
      commentsDiv.appendChild(imgTextBtn);

      authorComment.appendChild(authorDetails);
      authorComment.appendChild(enjoyed);
      authorComment.appendChild(commentsDiv);
      authorComment.appendChild(usersComments);

      subDiv.appendChild(authorComment);
      container.appendChild(subDiv);

      const morePostDiv = document.createElement("div");
      morePostDiv.innerHTML = `<div class="more-post">
        <p>More from ${authorName.textContent}</p>
        <div class="row posts"></div>
        </div>`;

      const posts = morePostDiv.querySelector(".posts");
      if (posts) {
        GetRelatedPosts(posts, 2, authorName2)
      }

      subDiv.appendChild(authorComment);
      container.appendChild(mainPost);
      container.appendChild(subDiv);
      container.appendChild(morePostDiv);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      // Handle error, e.g., display a message or fallback content
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Error fetching categories";
      container.appendChild(errorMessage);
    });

  return container;
};

export { PostPage };
