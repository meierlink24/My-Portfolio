
const menuContiner = document.getElementById("menu");
const contentContainer = document.getElementById("content");
/**
 * -------------------------------------------------------------------------------
 * FUNCTIONS
 * -------------------------------------------------------------------------------
 */

function welcomeFunction() {
    menuContiner.innerHTML = `
    <div id="menu-cont">
       <button id="Home">HOME</button>
       <button id="Aboutme">ABOUT ME</button>
       <button id="Portfolio">PORTFOLIO</button>
       <button id="Lab">LAB</button>
   </div>
`;


    Home();

    
    document.getElementById("Home").addEventListener("click", Home);
    document.getElementById("Aboutme").addEventListener("click", About);
    document.getElementById("Portfolio").addEventListener("click", Portfolio);
    document.getElementById("Lab").addEventListener("click", Lab);
}


function Home() {
    contentContainer.innerHTML= `<p id="home-p">Hello, I'm Stefan. Welcome to my personal page — feel free to explore and I hope you have a great time here!</p>
`;
}

function About() {
    contentContainer.innerHTML = ` <h1>About Me</h1>
  <p>I'm Stefan, a soon-to-be graduate of the Mathematical Grammar School with a perfect GPA of 5.00. I’m passionate about solving complex challenges, from front-end web development to low-level embedded systems programming.</p>

  <p>My strong background in advanced mathematics plays a key role in many of my projects, and I always strive to integrate mathematical thinking into practical solutions. You can explore some of my current work in the <strong>Lab</strong> section of this site.</p>

  <p>I prefer a minimalist tech stack and enjoy building software from scratch, focusing on clean, efficient, and reliable code.</p>

  <h1>Technical Skills</h1>
  <p>I have strong proficiency in a range of programming languages and technologies, including:</p>
  <p><strong>Languages:</strong> JavaScript, SQL, C++, C, Python, Ruby, Rust, Bash</p>
  <p><strong>Software Tools:</strong> Microsoft Access, Excel, Inkscape, Adobe Illustrator, Canva</p>

  <p>Also — yes, I use Linux. 😄</p>`;
}

function Portfolio() {
    contentContainer.innerHTML = ``;
}

function Lab() {
    contentContainer.innerHTML = ``;
}


window.onload = welcomeFunction; 