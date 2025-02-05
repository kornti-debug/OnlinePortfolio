

// const variables to get all html elements/ paths and hashes
const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.querySelectorAll('.menu-link, .nav-ul_menu a');
const currentPath = window.location.pathname;
const currentHash = window.location.hash;
menuLinks.forEach(link => {
  //path and hash from the link
  const linkPath = link.pathname;
  const linkHash = link.hash;

  // Check if on index page
  if (currentPath === '/' || currentPath === '/index.html') {
    // For index page, highlight based on hash
    if (currentHash && currentHash === linkHash) {
      // link.classList.add('active');
    }
  } else {
    // For other pages, highlight based on pathname
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  }

  // Handle menu toggle
  link.addEventListener('click', () => {

    // Remove active class from all links
    menuLinks.forEach(menuLink => menuLink.classList.remove('active'));
    // Add active class to clicked link
    link.classList.add('active');

    if (menuToggle) {
      menuToggle.checked = false;
    }
  });
});
