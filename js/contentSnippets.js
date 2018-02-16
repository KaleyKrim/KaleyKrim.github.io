function snippets(){
  const home = `
    <div id="sub-header">
      <h1>Hello!</h1>
    </div>
    <div class="bio-block">
      <h2>
        My name's Kaley, and I'm a full-stack developer.
      </h2>
      Right now my favorite tools for building apps are <span class="pink">Node.js</span>, <span class="pink">ExpressJS</span>, <span class="pink">PostgreSQL</span>, and <span class="pink">React.js</span> + <span class="pink">Redux</span>. I also have experience with mobile app development using <span class="pink">React Native</span>.
      <br>
      <br>
      I've previously worked as an Assistant Language Teacher in a snowy town in Northern Japan, and then as a translator for Japanese games, visual novels, short stories, and news articles. In 2017, I received the Kurodahan Press Translation Prize for my translation of 「とんでるじっちゃん」 (Flying Gramps) by Onuma Tamaki, which won the 2013 ゆきのまち幻想文学賞.
      <br>
      <br>
        Feel free to check out some of my projects on my portfolio page, or <span class="pink"><a href="https://github.com/KaleyKrim">peruse my code on GitHub</span></a>!
    </div>
  `;

  const portfolio = `
  <div id = "sub-header">
        <h1>Web Apps</h1>
      </div>
        <ul class="portfolio-grid">
          <li>
            <a href="http://159.89.147.189/" class="animated flipInX">
            <img src="../assets/msgboardthumb.png" alt="img01"/>
            </a>
            <div class="description">A multi user message board SPA built with Node.js, PostgreSQL, & AngularJS.</div>
          </li>
          <li>
            <a href="http://165.227.22.200/" class="animated flipInX">
            <img src="../assets/ideathumb.png" alt="img01"/>
            </a>
            <div class="description">An idea board SPA built with Node.js, PostgreSQL, React.js, & AWS.</div>
          </li>
        </ul>
    <div id = "sub-header">
      <h1>Just for Fun</h1>
    </div>
    <div id="portfolio">
      <ul class="portfolio-grid">
        <li>
          <a href="http://165.227.60.172/" class="animated flipInX">
            <img src="../assets/pixelpainterthumb.png" alt="Pixel Party, a realtime javascript paint app"/>
          </a>
          <div class="description">A realtime painting/gallery app built with Node.js, PostgreSQL & Socket.io.</div>
        </li>
        <li>
          <a href="http://kaleykriminger.com/movies.html" class="animated flipInX">
            <img src="../assets/sophoclesthumb.png" alt="Sophocles' Movie Recommendation Cafe"/>
          </a>
          <div class="description">A fun movie recommendation app that calls the OMDB API.</div>
        </li>
      </ul>
      <div id = "sub-header">
        <h1>Mobile</h1>
      </div>
        <ul class="portfolio-grid">
          <li>
            <a href="https://github.com/cozpon/Shadee" class="animated flipInX">
            <img src="../assets/shadethumb.png" alt="Shade, a social video platform for iOS"/>
            </a>
            <div class="description">A social video platform for iOS built with Node.js, PostgreSQL, AWS, & React Native.</div>
          </li>
        </ul>
    </div>
  `;

  return {
    home : home,
    portfolio : portfolio
  };
};