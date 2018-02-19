const contentDiv = document.getElementById('content');
const aboutButton = document.getElementById('about');
const portfolioButton = document.getElementById('portfolio');
const dropButton = document.getElementById('dropbtn');
const myDropDown = document.getElementById('myDropdown');

var currentPage = null;

aboutButton.addEventListener('click', ()=>{
  contentDiv.innerHTML = snippets().home;
  if(currentPage){
    currentPage.style.border = null;
  }
  currentPage = aboutButton;
  aboutButton.style.border = '1px solid #FF9C98';
});

portfolioButton.addEventListener('click', ()=>{
  contentDiv.innerHTML = snippets().portfolio;
  if(currentPage){
    currentPage.style.border = null;
  }
  currentPage = portfolioButton;
  portfolioButton.style.border = '1px solid #FF9C98';
});

dropButton.addEventListener('mouseover', ()=>{
  myDropDown.classList.toggle("show");
});