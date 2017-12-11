const snippets = (function(){


  const about = `
    <div id = "sub-header">
      <h1>About Kaley</h1>
    </div>
    <div class="post-it-board">
      <div class = "bio-block">
        <div class="tape"></div>
        <blockquote>
          I graduated with a BA in East Asian Languages and Literatures from the University of Florida in 2011, and spent the following three years as an assistant language teacher in a snowy town in Northern Japan. After returning to the US, I began my career as a translator, and devoted the next three years to translating Japanese games, visual novels, short stories, and news articles into English.
          </blockquote>
            <br>
            <blockquote>
          In early 2017, I decided to tear myself away from translation, and made the switch to web development.
          </blockquote>

        </div>
        <div id="ecuador"></div>
        <div id="volcano"></div>
        <div id="igloo"></div>
      </div>
    </div>
  `;

  const portfolio = `
    <div id = "sub-header">
      <h1>Projects</h1>
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
      <h1>Contact Me</h1>
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