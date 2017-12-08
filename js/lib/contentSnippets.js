const htmlContent = (function(){


  const About = `
    <div id = "subHeader">
      <h1>About me:</h1>
    </div>
    <div class = "textBlock">
      I like gummies.
    </div>
  `;

  const Portfolio = `
    <div id = "subHeader">
      <h1>Things I've made:</h1>
    </div>
    <a href = "./pixelPainter.html">
      <div class = "portfolio">
        <h2>Pixel Painter!</h2>
        <p>A simple painting app.</p>
      </div>
    </a>

  `;

  const Contact = `
  <div id = "subHeader">
      <h1>Contact me:</h1>
  </div>
  <div class = "textBlock">
  Just kidding, don't! :)
  </div>
  `;

  return {
    About : About,
    Portfolio : Portfolio,
    Contact : Contact,
  };


})();