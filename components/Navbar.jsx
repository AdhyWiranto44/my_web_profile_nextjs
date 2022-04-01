import Link from 'next/link';
import Image from 'next/image';

import data from '../data';


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow fixed-top">
        <div className="container">
        <Link href="/">
          <a className="navbar-brand pt-2">
            <Image src={`/img/${data.web_icon}`} alt={data.full_name} title="AdhyW" width="36" height="36" />
          </a>
        </Link>
          <button className="navbar-toggler border-0 pr-0" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <div className="nav-menu" onClick="openNavMenu(this)">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto navbarLinks">
                <Link href="/">
                  <a className="nav-item nav-link mx-2" data-toggle="collapse" data-target=".navbar-collapse.show">Home</a>
                </Link>
                <Link href="/portfolio">
                  <a className="nav-item nav-link mx-2" data-toggle="collapse" data-target=".navbar-collapse.show">Portfolio</a>
                </Link>
                <Link href="/skill">
                  <a className="nav-item nav-link mx-2" data-toggle="collapse" data-target=".navbar-collapse.show">Skill</a>
                </Link>
                <Link href="/about">
                  <a className="nav-item nav-link mx-2" data-toggle="collapse" data-target=".navbar-collapse.show">About</a>
                </Link>
                <Link href="/history">
                  <a className="nav-item nav-link mx-2" data-toggle="collapse" data-target=".navbar-collapse.show">History</a>
                </Link>
                <Link href="/hobby">
                  <a className="nav-item nav-link mx-2" data-toggle="collapse" data-target=".navbar-collapse.show">Hobby</a>
                </Link>
                <Link href="https://adhywiranto44.medium.com/">
                  <a className="nav-item nav-link mx-2" target="_blank">Posts</a>
                </Link>
              </div>
              <Link href="/contact">
                <a className="nav-item nav-link mx-2"><i className="fas fa-paper-plane mr-2"></i>Contact me!</a>
              </Link>
              {/* <button className="btnChangeTheme btn btn-outline-dark btn-sm border-0 ml-3 shadow-none">
                <i className="far fa-moon"></i>
              </button> */}
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;