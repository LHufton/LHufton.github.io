import './App.css'
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Lead from './components/Lead'
import About from './components/About'
import Experience from './components/Experience'
import Project from './components/Project'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Function to scroll to a section when a link is clicked
    const scrollToSection = (heading) => {
      const element = document.querySelector(heading)
      if (element) {
        const scrollDistance = element.offsetTop
        window.scrollTo({
          top: scrollDistance,
          behavior: 'smooth'
        })
      }
    }

    // Update the current year
    document.getElementById('current-year').textContent =
      new Date().getFullYear()

    // Remove 'no-js' class from 'html'
    document.documentElement.classList.remove('no-js')

    // Add event listeners for header links
    const headerLinks = document.querySelectorAll('header a')
    headerLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        if (!this.classList.contains('no-scroll')) {
          e.preventDefault()
          scrollToSection(this.getAttribute('href'))
          const header = document.querySelector('header')
          if (header.classList.contains('active')) {
            document.body.classList.remove('active')
            header.classList.remove('active')
          }
        }
      })
    })

    // Scroll to top
    const toTopButton = document.getElementById('to-top')
    if (toTopButton) {
      toTopButton.addEventListener('click', function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      })
    }

    // Scroll to next section from lead section
    const leadDownSpan = document.getElementById('lead-down-span')
    if (leadDownSpan) {
      leadDownSpan.addEventListener('click', function () {
        scrollToSection('#lead')
      })
    }

    // Add timeline content
    const experienceTimeline = document.getElementById('experience-timeline')
    if (experienceTimeline) {
      const userContents = experienceTimeline.querySelectorAll(
        '.experience-content'
      )
      userContents.forEach((content) => {
        const vtimelinePoint = document.createElement('div')
        vtimelinePoint.classList.add('vtimeline-point')
        const vtimelineBlock = document.createElement('div')
        vtimelineBlock.classList.add('vtimeline-block')
        const vtimelineIcon = document.createElement('div')
        vtimelineIcon.classList.add('vtimeline-icon')
        const icon = document.createElement('i')
        icon.classList.add('fa', 'fa-map-marker')
        vtimelineIcon.appendChild(icon)
        vtimelinePoint.appendChild(vtimelineIcon)
        vtimelinePoint.appendChild(vtimelineBlock)
        content.parentElement.insertBefore(vtimelinePoint, content)
        const date = content.getAttribute('data-date')
        if (date) {
          const vtimelineDate = document.createElement('span')
          vtimelineDate.classList.add('vtimeline-date')
          vtimelineDate.textContent = date
          vtimelinePoint.insertBefore(vtimelineDate, vtimelineIcon)
        }
      })
    }

    // Mobile menu open
    const mobileMenuOpen = document.getElementById('mobile-menu-open')
    if (mobileMenuOpen) {
      mobileMenuOpen.addEventListener('click', function () {
        document.body.classList.add('active')
        document.querySelector('header').classList.add('active')
      })
    }

    // Mobile menu close
    const mobileMenuClose = document.getElementById('mobile-menu-close')
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', function () {
        document.body.classList.remove('active')
        document.querySelector('header').classList.remove('active')
      })
    }

    // View more projects
    const viewMoreProjects = document.getElementById('view-more-projects')
    if (viewMoreProjects) {
      viewMoreProjects.addEventListener('click', function (e) {
        e.preventDefault()
        this.style.display = 'none'
        document.getElementById('more-projects').style.display = 'block'
      })
    }
  }, [])

  return (
    <React.StrictMode>
      <Navbar />
      <Lead />
      <About />
      <Experience />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </React.StrictMode>
  )
}

export default App
