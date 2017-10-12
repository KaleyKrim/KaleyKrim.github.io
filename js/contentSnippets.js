const snippets = (function(){


  const about = `
    <div id = "subHeader">
      <h1>About Kaley:</h1>
    </div>
  `;

  const portfolio = `
    <div id = "subHeader">
      <h1>Things I've made:</h1>
    </div>
    <a href = "./pixelPainter.html">
      <div class = "portfolio">
        <div class = "link">
          Pixel Painter!
        </div>
        <div class = "portfolio_description">
          A simple painting app.
        </div>
      </div>
    </a>

  `;

  const contact = `
  <div id = "subHeader">
      <h1>Contact me:</h1>
    </div>
  `;

  return {

    about : about,
    portfolio : portfolio,
    contact : contact,
  };


}());