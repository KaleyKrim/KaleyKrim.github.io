const contentDiv = document.getElementById('words');

const aboutButton = document.getElementById('about');
const portfolioButton = document.getElementById('portfolio');
const resumeButton = document.getElementById('resume');
const contactButton = document.getElementById('contact');
const extrasButton = document.getElementById('extras');

aboutButton.addEventListener('click', ()=>{
  contentDiv.innerHTML = snippets.about;
});

portfolioButton.addEventListener('click', ()=>{
  contentDiv.innerHTML = snippets.portfolio;
});

contactButton.addEventListener('click', ()=>{
  contentDiv.innerHTML = snippets.contact;
});
