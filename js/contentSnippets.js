const snippets = (function(){


  const about = `
    <div id = "sub-header">
      <h1>About me:</h1>
    </div>
    <div class = "text-block">
      <div class="tape"></div>
      I'm a full stack JavaScript web developer.
      <br>
    </div>
  `;

  const portfolio = `
    <div id = "sub-header">
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
  <div id = "sub-header">
      <h1>Contact me:</h1>
  </div>
  <div class = "text-block">
  <div class="tape"></div>
  <ul>
    <li>
      LinkedIn: <a href="https://linkedin.com/in/kaleykriminger/">linkedin.com/in/kaleykriminger/</a>
    </li>
    <li>
      Github: <a href="https://github.com/KaleyKrim">https://github.com/KaleyKrim</a>
    </li>
  </ul>
  </div>
  `;

  return {

    about : about,
    portfolio : portfolio,
    contact : contact,
  };


}());