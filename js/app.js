const contentDiv = document.getElementById('content');
const homeButton = document.getElementById('home');
const portfolioButton = document.getElementById('portfolio');
const dropButton = document.getElementById('dropbtn');
const myDropDown = document.getElementById('myDropdown');

var currentPage = null;

homeButton.addEventListener('click', ()=>{
  contentDiv.innerHTML = snippets().home;
  if(currentPage){
    currentPage.style.border = null;
  }
  currentPage = homeButton;
  homeButton.style.border = '1px solid white';
});

portfolioButton.addEventListener('click', ()=>{
  contentDiv.innerHTML = snippets().portfolio;
  if(currentPage){
    currentPage.style.border = null;
  }
  currentPage = portfolioButton;
  portfolioButton.style.border = '1px solid white';
});

dropButton.addEventListener('mouseover', ()=>{
  myDropDown.classList.toggle("show");
});

myDropDown.addEventListener('mousout', ()=>{
  myDropDown.classList.toggle("show");
})

window.onscroll = function() {
  stickyHeader();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}