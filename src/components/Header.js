import React from "react";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <span class="body-line"></span>
      <span class="body-line"></span>
      <span class="body-line last"></span>

      <header>
        <span class="logo">
          <Link to="/">Lee Kameron</Link>
        </span>
        <nav>
          <span class="logo_icon" onClick={toggleDrawer}>
            <i class="fa-solid fa-ellipsis-vertical"></i>&nbsp; Menu
          </span>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className="navsidebar"
          >
            <span class="closeNav" onClick={() => setIsOpen(false)}>
              <i class="fa-solid fa-xmark"></i>
            </span>
            <ul>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/news">
                  News
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/archive">
                  Archive
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/awards">
                  Awards
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/press">
                  Press
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/contact-us">
                  Outreach
                </Link>
              </li>
            </ul>
          </Drawer>
        </nav>
        <div class="followus">
          <ul>
            <li>Follow Us on</li>
            <li>
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
