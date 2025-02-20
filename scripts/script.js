// Get menu toggle button (for mobile) and all navigation links
const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.querySelectorAll(".menu-link, .nav-ul_menu a");
const slider = document.querySelector(".project-slider");
const prevArrow = document.getElementById("arrow-previous-slider");
const nextArrow = document.getElementById("arrow-next-slider");
const slides = document.querySelectorAll('.project-slider img');
const dots = document.querySelectorAll('.slider-nav a');
const projectTitle = document.getElementById('project-title');

nextArrow.addEventListener('click', ()=>{
  slider.scrollBy({left: slider.clientWidth, behavior:'smooth'});
});

prevArrow.addEventListener('click', ()=>{
  slider.scrollBy({left: -slider.clientWidth, behavior:'smooth'});
});

function updateActiveDot() {
  let scrollLeft = slider.scrollLeft;
  let slideWidth = slider.clientWidth;
  let activeIndex = Math.round(scrollLeft / slideWidth); // Find the closest slide index

  dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
  });

  projectTitle.textContent = slides[activeIndex].alt;
}

    // Detect scrolling to update active dot
    slider.addEventListener('scroll', updateActiveDot);

    // Initialize the active dot on page load
    updateActiveDot();


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
