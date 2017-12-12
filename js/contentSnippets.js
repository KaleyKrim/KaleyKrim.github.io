const snippets = (function(){


  const home = `
    <div id = "sub-header">
      <h1>Hello!</h1>
    </div>
    <div class="home">
      My name's Kaley, and I'm a web developer.
      <br>
      Right now my favorite tools are <span class="pink">Node.js</span>, <span class="pink">PostgreSQL</span>, and <span class="pink">React.js</span>.
      <br>
      <br>
      I'm especially interested in socket programming, and I'm currently developing a super-secret cat-themed multiplayer browser game using Socket.IO.
      <br>
      <br>
      Feel free to check out my portfolio page, or click the GitHub logo in the footer if you're interested in perusing my code!
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
    <div class = "bio-block">
      <a href = "./pixelPainter.html">
        <div class = "portfolio">
          <h2>❤︎Paint Time♪</h2>
          <p>
            What time is it?
            <br>
            Paint time!
            <br>
            <br>
            My first JavaScript project ever; built to practice manipulating the DOM.
            <br>
          </p>
        </div>
      </a>
      <a href = "https://github.com/KaleyKrim/angular-message-board">
        <div class = "portfolio">
          <h2>Angular Message Board</h2>
          <p>
            A multi-user message board.
            <br>
            <br>
            Built with Node.js, Express.js, Sequelize, PostgreSQL, and AngularJS.
            <br>
          </p>
        </div>
      </a>
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