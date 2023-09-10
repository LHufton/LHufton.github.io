import React from 'react'

function Lead() {
  return (
    <div id="lead">
      <div id="lead-content">
        <h1>Luke Hufton</h1>
        <h2>Full Stack Developer</h2>
        <a
          href="images/resume.pdf"
          download="resume.pdf"
          className="btn-rounded-white"
        >
          Download Resumé
        </a>
      </div>

      <div id="lead-overlay"></div>

      <div id="lead-down">
        <span>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  )
}

export default Lead
