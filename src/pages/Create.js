import { loadPage } from "..";
import { MainPage } from "./Main";

const Create = () => {
  // Create form element
  const form = document.createElement("form");

  // Create input for title
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("id", "title");
  titleInput.setAttribute("required", "true");
  titleInput.setAttribute("placeholder", "Title");

  // Create input for image URL
  const imageUrlInput = document.createElement("input");
  imageUrlInput.setAttribute("type", "url");
  imageUrlInput.setAttribute("name", "image-url");
  imageUrlInput.setAttribute("id", "image-url");
  imageUrlInput.setAttribute("placeholder", "Image URL");

  // Create textarea for content
  const editorContainer = document.createElement("div");
  editorContainer.classList.add("editor-cont");
  const editor = document.createElement("textarea");
  editor.rows = 15;
  editor.cols = 30;
  editor.placeholder = "Enter blog contents ...";
  editor.required = true;
  editor.id = "editor";

  editorContainer.appendChild(editor);

  form.appendChild(titleInput);
  form.appendChild(imageUrlInput);
  form.appendChild(editorContainer);

  // Create div for buttons
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("btn-div");

  // Create publish button
  const publishButton = document.createElement("button");
  publishButton.setAttribute("type", "submit");
  publishButton.classList.add("btn", "btn-colored");
  publishButton.textContent = "Publish";
  buttonDiv.appendChild(publishButton);

  // Sections
  const about = "New User details to be updated";
  const autImg =
    "https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_640.jpg";
  const autName = "New User";
  publishButton.addEventListener("click", (e) => {
    e.preventDefault();
      e.preventDefault();
      const post = {
        about,
        postImg: imageUrlInput.value,
        title: titleInput.value,
        content: editor.value,
        authorImg: autImg,
        authorName: autName,
        date: "April 18, 2024",
        categories: [],
        comments: [],
      };
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      }).then(() => {
        loadPage(MainPage())
      });
  });

  // Create cancel button
  const cancelButton = document.createElement("a");
  cancelButton.setAttribute("href", "#");
  cancelButton.classList.add("btn");
  cancelButton.textContent = "Cancel";
  buttonDiv.appendChild(cancelButton);

  // Append button div to form
  form.appendChild(buttonDiv);

  return form;
};

export { Create };
