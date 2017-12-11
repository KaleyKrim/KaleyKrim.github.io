const contentDiv = document.getElementById('words');

const aboutButton = document.getElementById('about');
const portfolioButton = document.getElementById('portfolio');
const contactButton = document.getElementById('contact');

aboutButton.addEventListener('click', ()=>{
  contentDiv.innerHTML = snippets.about;
});

portfolioButton.addEventListener('click', ()=>{
  contentDiv.innerHTML = snippets.portfolio;
});

contactButton.addEventListener('click', ()=>{
  contentDiv.innerHTML = snippets.contact;
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}