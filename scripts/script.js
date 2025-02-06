// Get all menu links
const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.querySelectorAll(".menu-link, .nav-ul_menu a");

// Function to update active link
function updateActiveLink() {
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;

  // Remove active class from all links
  menuLinks.forEach(link => link.classList.remove("active"));

  let foundActive = false; // Ensure only one link gets activated

  menuLinks.forEach(link => {
    const linkPath = link.pathname;
    const linkHash = link.hash;

    // Highlight project link based on pathname
    if (currentPath === linkPath && !linkHash) {
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

// Function to handle clicks on menu links
function handleMenuClick(event) {
  const clickedLink = event.currentTarget;

  // Remove active class from all links
  menuLinks.forEach(menuLink => menuLink.classList.remove("active"));
  
  // Add active class to clicked link (only if it's not a hash link)
  if (!clickedLink.hash) {
    clickedLink.classList.add("active");
  }

  // Close mobile menu if it's open
  if (menuToggle) {
    menuToggle.checked = false;
  }

  // Delay updating hash-based links to ensure correct highlighting
  setTimeout(updateActiveLink, 50);
}

// Run function on page load
document.addEventListener("DOMContentLoaded", updateActiveLink);

// Handle click event for menu links
menuLinks.forEach(link => link.addEventListener("click", handleMenuClick));

// Handle URL hash changes dynamically
window.addEventListener("hashchange", updateActiveLink);
