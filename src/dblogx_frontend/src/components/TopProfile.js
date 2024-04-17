const TopProfile = () => {
  var topProfContainer = document.createElement("div");
  topProfContainer.classList.add("top-prof", "container");

  var profContainer = document.createElement("div");
  profContainer.classList.add("prof");

  var heading = document.createElement("h2");
  heading.textContent = "Sir Harry";

  var dateContainer = document.createElement("div");
  dateContainer.classList.add("date");
  dateContainer.innerHTML = `<i class="fa-solid fa-calendar-week"></i>`

  var dateParagraph = document.createElement("p");
  dateParagraph.textContent = "Joined January 2024";

  dateContainer.appendChild(dateParagraph);

  // Create the bio paragraph
  var bioParagraph = document.createElement("p");
  bioParagraph.classList.add("bio");
  bioParagraph.textContent = "Weaver of Tales, Poems, Music & Love";

  // Append all elements to the profile container
  profContainer.appendChild(heading);
  profContainer.appendChild(dateContainer);
  profContainer.appendChild(bioParagraph);

  // Create the update container
  var updateContainer = document.createElement("div");
  updateContainer.classList.add("update");

  // Create the update button
  var updateButton = document.createElement("button");
  updateButton.classList.add("btn", "btn-colored");
  updateButton.textContent = "Update profile";

  // Append the button to the update container
  updateContainer.appendChild(updateButton);

  // Append the profile container and the update container to the main container
  topProfContainer.appendChild(profContainer);
  topProfContainer.appendChild(updateContainer);

  return topProfContainer;
};

export { TopProfile };
