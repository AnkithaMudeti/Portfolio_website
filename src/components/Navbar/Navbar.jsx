import { memo, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks, SCROLL_OFFSET } from '../../constants/navLinks';
import './Navbar.css';

const NavLinkList = memo(function NavLinkList({ listClassName, linkClassName, onLinkClick }) {
  return (
    <ul className={listClassName}>
      {navLinks.map(({ label, to }) => (
        <li key={to}>
          <Link
            to={to}
            spy
            smooth
            offset={SCROLL_OFFSET}
            duration={500}
            activeClass="navbar__link--active"
            className={linkClassName}
            onClick={onLinkClick}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
});

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        <nav className="navbar__inner" aria-label="Main navigation">
          <Link
            to="home"
            spy
            smooth
            offset={SCROLL_OFFSET}
            duration={500}
            className="navbar__logo"
            onClick={closeMenu}
          >
            ANKITHA.
          </Link>

          <NavLinkList
            listClassName="navbar__links navbar__links--desktop"
            linkClassName="navbar__link"
          />

          <button
            type="button"
            className="navbar__toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </nav>
      </div>

      <div
        className={`navbar__overlay ${menuOpen ? 'navbar__overlay--open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="navbar__mobile-header">
          <Link
            to="home"
            spy
            smooth
            offset={SCROLL_OFFSET}
            duration={500}
            className="navbar__logo"
            onClick={closeMenu}
          >
            ANKITHA.
          </Link>
          <button
            type="button"
            className="navbar__toggle navbar__toggle--close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <HiX />
          </button>
        </div>

        <NavLinkList
          listClassName="navbar__links navbar__links--mobile"
          linkClassName="navbar__link navbar__link--mobile"
          onLinkClick={closeMenu}
        />
      </aside>
    </header>
  );
}

export default memo(Navbar);
