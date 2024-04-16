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
