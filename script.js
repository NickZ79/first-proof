const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.navlinks');

function setMenuOpen(open) {
  links.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
}

toggle.addEventListener('click', () => {
  setMenuOpen(!links.classList.contains('open'));
});

// Close the menu after following a link. One listener on the list
// handles every link inside it.
links.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false);
});
