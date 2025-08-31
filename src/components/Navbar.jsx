import React, { useEffect, useState } from "react";
import "../styles/components/Navbar.css";
import { NAVBAR_LEFT_DATA } from "../utils/api";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
const breakpoint = 768

const handleMouseEnter = (menu) => {
  if (timeoutId) clearTimeout(timeoutId); // cancel closing
  setHovered(menu);
};

const handleMouseLeave = () => {
  const id = setTimeout(() => setHovered(null), 200); // 200ms delay
  setTimeoutId(id);
};

useEffect(() => {
  const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

  // Initial value
  setIsMobile(mediaQuery.matches);

  // Listener for changes
  const handleChange = (e) => setIsMobile(e.matches);
  mediaQuery.addEventListener("change", handleChange);

  // Cleanup
  return () => mediaQuery.removeEventListener("change", handleChange);
}, [breakpoint]);




const renderNavLinks = () =>
  NAVBAR_LEFT_DATA.map((navItem) => {
    if (navItem.type === "select") {
      return (
        <li key={navItem.key} className="dropdown-wrapper">
          <select className="currency-select">
            {navItem.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </li>
      );
    }
    if(isMobile){
      return(
        <li key={navItem.key} className="mobile-menu-item">
        <button
          className="mobile-menu-btn"
          onClick={() =>
            setExpandedMenu(expandedMenu === navItem.key ? null : navItem.key)
          }
        >
          {navItem.label} 
          <span className="arrow">{expandedMenu === navItem.key ? "▲" : "▼"}</span>
        </button>
      
        {expandedMenu === navItem.key && (
          <div className="mobile-submenu">
            {navItem.columns?.map((col, idx) => (
              <div key={idx} className="mobile-submenu-column">
                {col.title && <h4 className="mobile-submenu-title">{col.title}</h4>}
                <ul className="mobile-submenu-list">
                  {col.items.map((item, i) => (
                    <li key={i} className="mobile-submenu-item-link">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
      
            {navItem.images?.map((img, idx) => (
              <div key={idx} className="mobile-submenu-image">
                <img src={img.src} alt={img.alt} className="mobile-submenu-img"/>
                {img.text && <p className="mobile-submenu-img-text">{img.text}</p>}
              </div>
            ))}
          </div>
        )}
      </li>
      
  
      )
    }

    return (
      <li key={navItem.key} className="dropdown-wrapper">
        <div
          className="dropdown-container"
          onMouseEnter={() => !isMobile && handleMouseEnter(navItem.key)}
          onMouseLeave={() => !isMobile && handleMouseLeave()}
        >
          <a href="#">{navItem.label}</a>
          {navItem.line && (
            <span
              className={`dropdown-line ${
                hovered === navItem.key ? "active" : ""
              }`}
            ></span>
          )}

          {hovered === navItem.key && !isMobile && (
            <div className="mega-menu show">
              {navItem.columns?.map((col, idx) => (
                <div key={idx} className="menu-column">
                  {col.title && <h4>{col.title}</h4>}
                  <ul>
                    {col.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {navItem.images?.map((img, idx) => (
                <div key={idx} className="menu-item menu-column">
                  <img src={img.src} alt={img.alt} />
                  {img.text && <p>{img.text}</p>}
                  {img.button && <button>{img.button}</button>}
                </div>
              ))}
            </div>
          )}
        </div>
      </li>
    );
  });



  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
      
        {isMobile ? (
          <>
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(true)}
            >
              ☰
            </button>
            {mobileMenuOpen && (
              <div className="mobile-menu-modal">
                <button
                  className="close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ✕
                </button>
                <>
                <ul>{renderNavLinks()}</ul>
                <button className="btn-manuka">WHICH MANUKA IS FOR ME?</button>
                </>
              </div>
            )}
          </>
        ) : (
          <>
            <button className="btn-manuka">WHICH MANUKA IS FOR ME?</button>
            <ul className="nav-links-left">{renderNavLinks()}</ul>
          </>
        )}
      </div>
      <div className="navbar-left">
       
     
      
       
      </div>

      {/* Center Logo */}
      <div className="navbar-center">
        <img
          src="//newzealandhoneyco.com/cdn/shop/files/new_zealand_honey_logo.svg?v=1746510803&width=600"
          alt="NZ Honey Co."
          className="logo"
        />
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <div className="icons">


          <svg fill="none" height="23" viewBox="0 0 20 23" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.97595 12.76C13.2166 12.76 15.8437 10.1274 15.8437 6.88C15.8437 3.63257 13.2166 1 9.97595 1C6.73527 1 4.10817 3.63257 4.10817 6.88C4.10817 10.1274 6.73527 12.76 9.97595 12.76ZM9.97595 12.76C5.15599 12.76 1.24414 16.68 1.24414 21.51M9.97595 12.76C14.7959 12.76 18.7078 16.68 18.7078 21.51" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.93" stroke="#313131"></path>
          </svg>
          <svg fill="none" height="23" viewBox="0 0 23 23" width="23" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 22L15.494 15.4968C18.8158 12.1765 18.8158 6.80148 15.494 3.49028C12.1813 0.169906 6.80402 0.169906 3.49137 3.49028C0.169543 6.80148 0.169543 12.1765 3.49137 15.4968C6.07909 18.0834 9.91479 18.6521 13.0531 17.2029" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.93" stroke="#313131"></path>
          </svg>
          <>
  <button onClick={() => setIsOpen(true)} className="cart-trigger-btn">
    <span className="svg-wrapper">
      <svg fill="none" height="23" viewBox="0 0 21 23" width="21">
        <path
          d="M15.0707 5.83H19.5114V21.33H1V5.83H11.4981M5.45073 5.83C5.45073 3.16 7.60624 1 10.2607 1C12.9152 1 15.0707 3.16 15.0707 5.82"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.93"
          stroke="#313131"
        />
      </svg>
    </span>
    <span className="cart_emtyy" aria-hidden="true">
      0
    </span>
  </button>

  <div className={`rebuy-cart__flyout ${isOpen ? "open" : ""}`}>
    {/* Header */}
    <div data-rebuy-cart-header-top="" className="rebuy-cart-header-top">
      <div data-rebuy-cart-header-top-inner="">
        <h2 className="rebuy-cart__title">Your Cart</h2>
      </div>
      <button
        type="button"
        className="rebuy-cart__flyout-close"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>
    </div>

    {/* Progress Bar */}
    <div className="rebuy-cart__progress-bar-wrapper">
      <div className="rebuy-cart__progress-bar-meter">
        <div
          className="rebuy-cart__progress-bar-meter-fill"
          style={{ width: "40%" }}
        ></div>
      </div>
      <div className="rebuy-cart__progress-bar-prompt">
        You are $30.00 away from <b>FREE SHIPPING</b>!
      </div>
    </div>

    {/* Cart Body */}
    <div data-rebuy-cart-scroll-area="">
      <div className="rebuy-cart__flyout-empty-cart">
        <p>Your cart is empty.</p>
        <p>Fill it with something good.</p>
        <p>
          <a
            href="https://newzealandhoneyco.com/collections/manuka-honey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop Now
          </a>
        </p>
      </div>
    </div>
  </div>

  {/* Overlay */}
  {isOpen && (
    <div
      className="rebuy-cart__overlay"
      onClick={() => setIsOpen(false)}
    ></div>
  )}
</>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
