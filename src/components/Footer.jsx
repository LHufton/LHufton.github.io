import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 copyright">
            <p>
              Copyright &copy; <span id="current-year">2023</span> Luke Hufton
            </p>
          </div>
          <div className="col-sm-2 top">
            <span id="to-top">
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
