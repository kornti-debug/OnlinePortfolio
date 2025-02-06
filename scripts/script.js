// Get menu toggle button (for mobile) and all navigation links
const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.querySelectorAll(".menu-link, .nav-ul_menu a");

// Function to highlight the active link
function updateActiveLink() {
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;

  // Remove 'active' from all links
  menuLinks.forEach(link => link.classList.remove("active"));

  // Loop through links and find the one that matches the current URL
  menuLinks.forEach(link => {
    if (
      (link.pathname === currentPath && !link.hash) || 
      (currentHash && link.hash === currentHash)
    ) {
      highlightMatchingLinks(link);
    }
  });
}

// Function to highlight all matching links (handles mobile & desktop menus)
function highlightMatchingLinks(activeLink) {
  const linkText = activeLink.innerText.trim().toLowerCase();

  menuLinks.forEach(link => {
    if (link.innerText.trim().toLowerCase() === linkText) {
      link.classList.add("active");
    }
  });
}

// Handle menu link clicks
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    highlightMatchingLinks(link);

    // Close mobile menu if it's open
    if (menuToggle) {
      menuToggle.checked = false;
    }

    // Small delay to ensure hash updates correctly
    setTimeout(updateActiveLink, 10);
  });
});

// Update active link when the page loads or hash changes
document.addEventListener("DOMContentLoaded", updateActiveLink);
window.addEventListener("hashchange", updateActiveLink);
