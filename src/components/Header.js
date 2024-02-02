import React from "react";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

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
          <a href="index.php">Lee Kameron</a>
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
            <div>Hello World</div>
          </Drawer>
          <ul>
            <span class="closeNav">
              <i class="fa-solid fa-xmark"></i>
            </span>
            <li>
              <a href="news.php">News</a>
            </li>
            <li>
              <a href="entertainment.php">Entertainment</a>
            </li>
            <li>
              <a href="archive.php">Archive</a>
            </li>
            <li>
              <a href="awards.php">Awards</a>
            </li>
            <li>
              <a href="press.php">Press</a>
            </li>
            <li>
              <a href="#">Outreach</a>
            </li>
          </ul>
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
