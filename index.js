const storyBar = document.getElementById('storyBar');
const liveBar = document.getElementById('liveBar');
const followBar = document.getElementById('followBar');
const sideNav = document.getElementById('sideNav');
const menuButton = document.getElementById('menuButton');
const closeSearch = document.getElementById('closeSearch');
const openSearch = document.getElementById('openSearch');
const searchInput = document.getElementById('searchInput');
let mouseDown = false;
let startX, scrollLeft;

let handleMenuButtonClick = e => {
  if (sideNav.classList.contains('hidden')) {
    sideNav.classList.remove('hidden')
  } else {
    sideNav.classList.add('hidden')
  }
}
let handleMenuSearch = e => {
  if (searchInput.classList.contains('hidden')) {
    // searchInput.classList.add('block')
    searchInput.classList.toggle('hidden')
  } else {
    searchInput.classList.add('hidden')
    // searchInput.classList.remove('block')
  }
}

let storyBarStartDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - storyBar.offsetLeft;
  scrollLeft = storyBar.scrollLeft;
};

let liveBarStartDragging = (e) => {
  console.log(e)
  mouseDown = true;
  startX = e.pageX - liveBar.offsetLeft;
  scrollLeft = liveBar.scrollLeft;
};

let followBarStartDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - followBar.offsetLeft;
  scrollLeft = followBar.scrollLeft;
};

let stopDragging = function (event) {
  mouseDown = false;
};

storyBar.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if (!mouseDown) { return; }
  const x = e.pageX - storyBar.offsetLeft;
  const scroll = x - startX;
  storyBar.scrollLeft = scrollLeft - scroll;
});

liveBar.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if (!mouseDown) { return; }
  const x = e.pageX - liveBar.offsetLeft;
  const scroll = x - startX;
  liveBar.scrollLeft = scrollLeft - scroll;
});

followBar.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if (!mouseDown) { return; }
  const x = e.pageX - followBar.offsetLeft;
  const scroll = x - startX;
  followBar.scrollLeft = scrollLeft - scroll;
});

menuButton.addEventListener('click', handleMenuButtonClick, false)
closeSearch.addEventListener('click', handleMenuSearch, false)
openSearch.addEventListener('click', handleMenuSearch, false)

// Add the event listeners
storyBar.addEventListener('mousedown', storyBarStartDragging, false);
storyBar.addEventListener('mouseup', stopDragging, false);
storyBar.addEventListener('mouseleave', stopDragging, false);
// Add the event listeners
liveBar.addEventListener('mousedown', liveBarStartDragging, false);
liveBar.addEventListener('mouseup', stopDragging, false);
liveBar.addEventListener('mouseleave', stopDragging, false);
// Add the event listeners
followBar.addEventListener('mousedown', followBarStartDragging, false);
followBar.addEventListener('mouseup', stopDragging, false);
followBar.addEventListener('mouseleave', stopDragging, false);