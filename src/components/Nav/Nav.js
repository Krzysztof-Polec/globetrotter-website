import React, { useState } from 'react'
import "./Nav.scss"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return(
    <nav>
      <div className="nav-left-panel">
        <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <circle cx="36" cy="36" r="28" />
            <path d="m36 8v56c-8.5604 0-15.5-12.536-15.5-28s6.9396-28 15.5-28 15.5 12.536 15.5 28-6.9396 28-15.5 28" />
            <path d="m64 36h-56" />
            <path d="m60 22h-48" />
            <path d="m60 50h-48" />
          </g>
        </svg>
        <p>GLOBETROTTER</p>
      </div>
      <div className="nav-right-panel">
        <p>STRONA GŁÓWNA</p>
        <p>PODRÓŻE</p>
        <p>AKTUALNOŚCI</p>
        <p>SKLEP</p>
        <svg fill="none" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <circle cx="12" cy="7" r="4" />
            <path d="m4 21v-4c0-1.1046.89543-2 2-2h12c1.1046 0 2 .8954 2 2v4" />
          </g>
        </svg>
        <svg height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
          <path d="m8.5 19c.82842712 0 1.5.6715729 1.5 1.5s-.67157288 1.5-1.5 1.5-1.5-.6715729-1.5-1.5.67157288-1.5 1.5-1.5zm9 0c.8284271 0 
          1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5-1.5-.6715729-1.5-1.5.6715729-1.5 1.5-1.5zm-14.5-17h2c.45560407 0 
          .848307.30684025.96505661.73773928l.02331509.11020354.48493187 3.15205718h14.52669643c.5997637 0 1.0549227.52067883.9951229 1.10034708l-.0189358.11658338-1.6519691 
          7.43386094c-.2917631 1.3129338-1.4183257 2.2635386-2.7462868 2.343718l-.1822744.0054906h-8.67981889c-1.42148471 0-2.63886776-.9956352-2.93318507-2.3700928l-.03193002-.1737356-1.60864178-10.4561716h-1.14208104c-.55228475 
          0-1-.44771525-1-1 0-.51283584.38604019-.93550716.88337887-.99327227l.11662113-.00672773h2zm16.7533839 6h-12.97238802l.94647034 6.1520572c.06927787.4503062.43226339.7917853.87590441.8416561l.11246728.0062867h8.67981889c.4296404 
          0 .8064398-.2735373.9445717-.6715473l.0316153-.1115222z" fillRule="evenodd" />
        </svg>
        <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="hamburger-lines">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav