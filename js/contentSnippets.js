const snippets = (function(){
  const home = `
    <div id = "sub-header">
      <h1>Hello!</h1>
    </div>
    <div class="home">
    <h2>My name's Kaley, and I'm a full-stack developer.</h2>
      Right now my favorite tools for building apps are <span class="pink">Node.js</span>, <span class="pink">ExpressJS</span>, <span class="pink">PostgreSQL</span>, and <span class="pink">React.js</span> + <span class="pink">Redux</span>. I also have experience with mobile app development using <span class="pink">React Native</span>.
      <br>
      <br>
      Before I became a programmer, I worked as an Assistant Language Teacher in a snowy town in Northern Japan, and then as a translator for Japanese games, visual novels, short stories, and news articles. In 2017, I received the Kurodahan Press Translation Prize for my translation of 「とんでるじっちゃん」 (Flying Gramps) by Onuma Tamaki, which won the 2013 ゆきのまち幻想文学賞.
      <br>
      <br>
      <h2>Feel free to check out some of my projects on my portfolio page, or click the GitHub logo in the footer if you're interested in perusing my code!</h2>
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
    portfolio : portfolio,
    contact : contact,
  };

}());