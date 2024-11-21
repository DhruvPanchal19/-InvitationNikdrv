// Function to load HTML sections
function loadSection(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.log("Error loading section: ", error));
}

// Load each section
loadSection("navbar", "sections/navbar.html");
loadSection("hero", "sections/hero.html");
loadSection("invitation", "sections/invitation.html");
loadSection("events", "sections/events.html");
loadSection("photoGallery", "sections/gallery.html");
loadSection("locations", "sections/locations.html");
