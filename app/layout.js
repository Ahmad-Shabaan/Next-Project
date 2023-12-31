import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <nav>
      <a href="#">
        {/* <img src="./assests/logo/logo.png" alt="logo" /> */}
        Logo
      
      
      </a>
      <label htmlFor="navList" className="app__nav-label"
        ><i className="fas fa-bars"></i
      ></label>
      <input type="checkbox" className="app__nav-checkbox" id="navList" />
      <ul className="app__nav-list">
        <li className="app__nav-listItem"><a href="#">home</a></li>
        <li className="app__nav-listItem"><a href="#">shop</a></li>
        <li className="app__nav-listItem"><a href="#">about</a></li>
        <li className="app__nav-listItem">
          <a href="#">latest</a>
          <ul className="app__nav-dropdown">
            <li className="app__nav-dropdownItem">
              <a href="#"> product list</a>
            </li>
            <li className="app__nav-dropdownItem">
              <a href="#">product details </a>
            </li>
          </ul>
        </li>
        <li className="app__nav-listItem">
          <a href="#">blog</a>
          <ul className="app__nav-dropdown">
            <li className="app__nav-dropdownItem"><a href="#"> blog</a></li>
            <li className="app__nav-dropdownItem">
              <a href="#">blog details </a>
            </li>
          </ul>
        </li>
        <li className="app__nav-listItem">
          <a href="#">pages</a>
          <ul className="app__nav-dropdown">
            <li className="app__nav-dropdownItem"><a href="#"> login</a></li>
            <li className="app__nav-dropdownItem"><a href="#">cart </a></li>
            <li className="app__nav-dropdownItem"><a href="#">element </a></li>
            <li className="app__nav-dropdownItem">
              <a href="#">confirmation </a>
            </li>
            <li className="app__nav-dropdownItem">
              <a href="#">product checkout </a>
            </li>
          </ul>
        </li>
        <li className="app__nav-listItem"><a href="#">contact</a></li>
      </ul>
      <div className="app__nav-icons">
        <a href="#"><i className="fas fa-search"></i></a>
        <a href="#"><i className="fas fa-user"></i></a>
        <a href="#"><i className="fas fa-shopping-cart"></i></a>
      </div>
    </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
