

// // const variables to get all html elements/ paths and hashes
// const menuToggle = document.getElementById('menu-toggle');
// const menuLinks = document.querySelectorAll('.menu-link, .nav-ul_menu a');
// const currentPath = window.location.pathname;
// const currentHash = window.location.hash;
// menuLinks.forEach(link => {
//   //path and hash from the link
//   const linkPath = link.pathname;
//   const linkHash = link.hash;

//   // Check if on index page
//   if (currentPath === '/' || currentPath === '/index.html') {
//     // For index page, highlight based on hash
//     if (currentHash && currentHash === linkHash) {
//       // link.classList.add('active');
//     }
//   } else {
//     // For other pages, highlight based on pathname
//     if (linkPath === currentPath) {
//       link.classList.add('active');
//     }
//   }

//   // Handle menu toggle
//   link.addEventListener('click', () => {

//     // Remove active class from all links
//     menuLinks.forEach(menuLink => menuLink.classList.remove('active'));
//     // Add active class to clicked link
//     link.classList.add('active');

//     if (menuToggle) {
//       menuToggle.checked = false;
//     }
//   });
// });

// Get all menu links
const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.querySelectorAll(".menu-link, .nav-ul_menu a");

// Function to update active link
function updateActiveLink() {
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;

  // Remove active class from all links initially
  menuLinks.forEach(link => link.classList.remove("active"));

  let foundActive = false; // Ensure only one link gets activated

  menuLinks.forEach(link => {
    const linkPath = link.pathname;
    const linkHash = link.hash;

    // Highlight project link based on pathname
    if (currentPath === linkPath && linkHash === "") {
      link.classList.add("active");
      foundActive = true;
    }

    // Highlight hash-based links only when they match
    if (!foundActive && currentHash && currentHash === linkHash) {
      link.classList.add("active");
      foundActive = true;
    }
  });
}

// Run function on page load
document.addEventListener("DOMContentLoaded", updateActiveLink);

// Handle click event for smooth toggling
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.forEach(menuLink => menuLink.classList.remove("active"));
    link.classList.add("active");

    // Close menu (if applicable)
    if (menuToggle) {
      menuToggle.checked = false;
    }
  });
});

// Handle URL hash changes dynamically
window.addEventListener("hashchange", updateActiveLink);

