const snippets = (function(){


  const home = `
    <div id = "sub-header">
      <h1>Hello!</h1>
    </div>
    <div class="home">
      My name's Kaley, and I'm a web developer.
      <br>
      <br>
      Right now my favorite tools for building an app are <span class="pink">Node.js</span>, <span class="pink">ExpressJS</span>, <span class="pink">PostgreSQL</span>, and <span class="pink">React.js</span>.
      <br>
      <br>
      I also have experience with mobile app development using <span class="pink">React Native</span>.
      <br>
      <br>
      Feel free to check out some of my projects on my portfolio page, or click the GitHub logo in the footer if you're interested in perusing my code!
    </div>
  `;

  const about = `
    <div id = "sub-header">
      <h1>About Me</h1>
    </div>
      <div class = "bio-block">
        <blockquote>
          I graduated with a BA in East Asian Languages and Literatures from the University of Florida in 2011, and spent the following three years as an assistant language teacher in a snowy town in Northern Japan. After returning to the US, I began my career as a translator, and devoted the next three years to translating Japanese games, visual novels, short stories, and news articles into English.
          </blockquote>
            <br>
            <blockquote>
          In early 2017, I decided to tear myself away from translation, and made the switch to web development.
          </blockquote>
      </div>
    </div>
  `;

  const portfolio = `
    <div id = "sub-header">
      <h1>Projects</h1>
    </div>
    <div id="portfolio">
  <ul class="portfolio-grid">
          <li>
            <a href="https://github.com/KaleyKrim/Shadee" class="animated flipInX">
              <img src="../assets/shadethumb.png" alt="Shade, a social video platform for iOS"/>
            </a>
          </li>
          <li>
            <a href="http://kaleykriminger.com/pixelPainter.html" class="animated flipInX">
              <img src="../assets/pixelpainterthumb.png" alt="Paint Time, a javascript paint app"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/KaleyKrim/react-product-marketplace-cms" class="animated flipInX">
              <img src="../assets/cmsthumb.png" alt="A product marketplace CMS"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/KaleyKrim/express-gallery" class="animated flipInX">
              <img src="../assets/gallerythumb.png" alt="img01"/>
            </a>
          </li>
        </ul>

</div>

  `;

  const contact = `
  <div id = "sub-header">
      <h1>Contact Me</h1>
  </div>
  <div class = "bio-block">
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

    home : home,
    about : about,
    portfolio : portfolio,
    contact : contact,
  };


}());