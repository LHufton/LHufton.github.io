import React from 'react'

function Project() {
  return (
    <div id="projects" className="background-alt">
      <h2 className="heading">Projects</h2>
      <div className="container">
        <div className="row">
          <div className="project shadow-large">
            {/* github link until deployed then replace */}
            <div className="project-info">
              <h3>Share your thoughts</h3>
              <img src="images/ShareThoughts.jpeg" alt="ShareYourThoughts" />
              <p>
                A MERN stack application designed to encourage better
                communication between people. This is a social media app where
                users can create a profile, post their thoughts, and comment on
                other users' posts.
                <br />
                <h4>Active project</h4>
              </p>
            </div>
          </div>

          <div className="project shadow-large">
            <a
              href="https://propip23.github.io/Simon/"
              className="project-image"
            >
              <p>
                <a href="https://propip23.github.io/Simon/">View Project</a>
              </p>
            </a>
            <div className="project-info">
              <h3>Simon</h3>
              <img src="images/simon.png" alt="Simon" />
              <p>
                I built a Simon game using Javascript, HTML, and CSS after two
                weeks of instruction. This is a digital version of the classic
                board game of the same name. The game is a memory game where the
                user has to remember the sequence of colors that are shown to
                them. The game also has a high score display to show the user's
                best score.
                <br />
              </p>
              <p>
                <a href="https://propip23.github.io/Simon/">View Project</a>
              </p>
            </div>
          </div>

          <div className="project shadow-large">
            <div className="project-info">
              <h3>"Tic-Tac-Toe"</h3>
              <img src="images/TTT.png" alt="Tic-Tac-Toe" />
              <p>
                I built a basic in-browser game using Javascript, HTML, and CSS
                after one week of instruction at General Assembly. The game is a
                two-player game where the user has to get three cells in a row
                to win.
                <br />
              </p>
              <p>
                <a href="https://unit1ttt-app.surge.sh/">View Project</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
