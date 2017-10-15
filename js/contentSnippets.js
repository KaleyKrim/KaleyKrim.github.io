const snippets = (function(){


  const about = `
    <div id = "subHeader">
      <h1>About me:</h1>
    </div>
    <div class = "textBlock">
      I like gummies.
    </div>
  `;

  const portfolio = `
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

  const contact = `
  <div id = "subHeader">
      <h1>Contact me:</h1>
  </div>
  <div class = "textBlock">
  Just kidding, don't! :)
  </div>
  `;

  return {

    about : about,
    portfolio : portfolio,
    contact : contact,
  };


}());