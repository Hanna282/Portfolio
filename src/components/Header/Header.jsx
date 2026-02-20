import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark")
    const [isOpen, setIsOpen] = useState(false);
    const checkboxRef = useRef(null);
    const menuMiniRef = useRef(null);
    const checkbtnRef = useRef(null);

    useEffect(() => {
        function handleDocumentClick(event) {
            const menuMini = menuMiniRef.current;
            const checkbtn = checkbtnRef.current;
            const checkbox = checkboxRef.current;

            if (!menuMini || !checkbtn || !checkbox) {
                return;
            }

            if (!menuMini.contains(event.target) &&
                !checkbox.contains(event.target) &&
                !checkbtn.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };

    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light")
    }, [darkMode])

    function handleToggleChange(e) {
        setIsOpen(e.target.checked);
    }

    function handleLabelClick(e) {
        e.stopPropagation();
    }

    function handleMenuClick() {
        setIsOpen(false);
    }

    const toggleDarkMode = () => {
        const newMode = !darkMode
        setDarkMode(newMode)
        localStorage.setItem("theme", newMode ? "dark" : "light")
    }

    return (
        <header className="header">
            <div className="header-left">
                <div className="header-brand">Hanna Mickels</div>
                <nav className="header-social-links" aria-label="Social Media Links">
                    <ul className="header-link-list">
                        <li>
                            <a
                                className="header-link-item"
                                href="mailto:hanna.mickels@gmail.com"
                                aria-label="Email"
                            >
                                <i className="bx bxs-envelope" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                className="header-link-item"
                                href="https://www.linkedin.com/in/hanna-mickels-3a54b3173"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <i className="bx bxl-linkedin-square" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                className="header-link-item"
                                href="https://github.com/Hanna282"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <i className="bx bxl-github" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header-right">

                <nav className="header-nav">
                    <ul className="header-menu">
                        <li><Link className="header-menu-link" to="/">Home</Link></li>
                        <li><Link className="header-menu-link" to="/about">About</Link></li>
                        <li><Link className="header-menu-link" to="/skills">Skills</Link></li>
                        <li><Link className="header-menu-link" to="/portfolio">Portfolio</Link></li>
                        <li><Link className="header-menu-link" to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <span className="header-separator" aria-hidden="true"></span>
                <button
                    className="header-darkmode-toggle"
                    onClick={toggleDarkMode}
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? <i className='bx bx-sun'></i> : <i className='bx bx-moon'></i>}
                </button>
                <div className={isOpen ? "header-hamburger header-hamburger-open" : "header-hamburger"}>
                    <input
                        type="checkbox"
                        id="check"
                        ref={checkboxRef}
                        checked={isOpen}
                        onChange={handleToggleChange}
                        aria-label="Toggle navigation menu"
                    />
                    <label
                        htmlFor="check"
                        ref={checkbtnRef}
                        onChange={handleLabelClick}
                    >
                        <i className="bx bx-menu"></i>
                    </label>
                    <ul
                        className={isOpen ? "header-menu-mini active" : "header-menu-mini"}
                        ref={menuMiniRef}
                    >
                        <li className="header-menu-mini-item">
                            <Link className="header-menu-link" to="/" onClick={handleMenuClick} >Home</Link>
                        </li>
                        <li className="header-menu-mini-item">
                            <Link className="header-menu-link" to="/about" onClick={handleMenuClick}>About</Link>
                        </li>
                        <li className="header-menu-mini-item">
                            <Link className="header-menu-link" to="/skills" onClick={handleMenuClick}>Skills</Link>
                        </li>
                        <li className="header-menu-mini-item">
                            <Link className="header-menu-link" to="/portfolio" onClick={handleMenuClick}>Portfolio</Link>
                        </li>
                        <li className="header-menu-mini-item">
                            <Link className="header-menu-link" to="/contact" onClick={handleMenuClick}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header