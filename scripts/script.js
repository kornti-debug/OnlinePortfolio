// Get all menu links (both desktop & mobile)
const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.querySelectorAll(".menu-link, .nav-ul_menu a");

// Function to update active links
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
      highlightMatchingLinks(link);
      foundActive = true;
    }

    // Highlight hash-based links only when they match
    if (!foundActive && currentHash && currentHash === linkHash) {
      highlightMatchingLinks(link);
      foundActive = true;
    }
  });
}

// Function to highlight all matching links (fix for desktop & mobile menus)
function highlightMatchingLinks(activeLink) {
  const activeText = activeLink.innerText.trim().toLowerCase();

  // Find all links with the same text and highlight them
  menuLinks.forEach(link => {
    if (link.innerText.trim().toLowerCase() === activeText) {
      link.classList.add("active");
    }
  });
}

// Function to handle clicks on menu links
function handleMenuClick(event) {
  const clickedLink = event.currentTarget;

  // Remove active class from all links
  menuLinks.forEach(menuLink => menuLink.classList.remove("active"));

  // Add active class to all matching links (desktop & mobile)
  highlightMatchingLinks(clickedLink);

  // Close mobile menu if it's open
  if (menuToggle) {
    menuToggle.checked = false;
  }

  // Ensure hash-based links are updated immediately
  setTimeout(updateActiveLink, 10);
}

// Run function on page load
document.addEventListener("DOMContentLoaded", updateActiveLink);

// Handle click event for menu links
menuLinks.forEach(link => link.addEventListener("click", handleMenuClick));

// Handle URL hash changes dynamically
window.addEventListener("hashchange", updateActiveLink);
