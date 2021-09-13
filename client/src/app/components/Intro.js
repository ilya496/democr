import React from "react";
import "../styles/Intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="container intro-container">
        <div className="intro-column">
          <p className="greeting">Hello, it&apos;s Ilya</p>
          <p className="desc">and I&apos;m UI&amp;UX designer</p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/ilya496"
            className="github-link"
          >
            Check out my GitHub
          </a>
        </div>
        <div className="intro-column">
          <p className="desc">My knowledge are HTML, CSS, JS,</p>
          <p className="desc">React.JS, Redux</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
