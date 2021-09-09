import '../styles/Header.scss';
import gitHub from '../images/github.png';
import linkedIn from '../images/linkedin.png';
import Hamburger from './Hamburger';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export type HamburgerProp = {
  isOpen: boolean;
}

const Header: React.FC = () => {

  const [ hamburgerOpen, setHamburgerOpen ] = useState<boolean>(false);
  const [ width, setWidth ] = useState<number>(window.innerWidth);

  const handleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  const linkStyle = {
    color: '#fff9f0',
    textDecoration: 'none',
  }

  const hamLinkStyle = {
    color: '#242424',
    textDecoration: 'none'
  }



  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    }
  }, []);

  const renderLinks = () => {
    return width < 768 ? (
      <div className="navigation-container">
        <div className="navigation">
          <ul>
            <Link smooth to="projects" style={hamLinkStyle} className="header__link" onClick={handleHamburger}>Projects</Link>
            <Link smooth to="about" style={hamLinkStyle} className="header__link" onClick={handleHamburger}>About</Link>
            <Link smooth to="skills" style={hamLinkStyle} className="header__link" onClick={handleHamburger}>Skills</Link>
            <Link smooth to="contact" style={hamLinkStyle} className="header__link" onClick={handleHamburger}>Contact</Link>
            <a href="https://github.com/SamuelEkh" target="_blank"><img className="header__github" src={gitHub} /></a>
            <a href="https://www.linkedin.com/in/samuel-ekholm-947661211/" target="_blank"><img className="header__linkedin" src={linkedIn} /></a>
          </ul>

          <div className="hamburger-container" onClick={handleHamburger}>
            <Hamburger isOpen={hamburgerOpen}/>
          </div>
        </div>
      <style>{`
        .navigation ul {
          display: ${hamburgerOpen ? 'flex' : 'none'};
          flex-direction: column;
          align-items: flex-end;
          background-color: #ededed;
          box-shadow: 0 0 5px #242424;
          margin-top: 50px;
          padding: 10px;
          left: -50px;
          border-radius: 8px;
          position: absolute;
        }

    `}</style>
    </div>
    ) : (
      <div className="link-container">
        <Link smooth to="projects" style={linkStyle} className="header__link">Projects</Link>
        <Link smooth to="about" style={linkStyle} className="header__link">About</Link>
        <Link smooth to="skills" style={linkStyle} className="header__link">Skills</Link>
        <Link smooth to="contact" style={linkStyle} className="header__link">Contact</Link>
        <a href="https://github.com/SamuelEkh" target="_blank"><img className="header__github" src={gitHub} /></a>
        <a href="https://www.linkedin.com/in/samuel-ekholm-947661211/" target="_blank"><img className="header__linkedin" src={linkedIn} /></a>
      </div>
    )
  }

  return (
    <header className="header">
      <Link smooth to="home" style={linkStyle}>
        <h2 className="header__name">
          Samuel Ekholm
        </h2>
      </Link>
      {renderLinks()}
    </header>
  )
}

export default Header;