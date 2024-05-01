import React from "react";
import { pagelink, socialLinks } from "../data";

const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {pagelink.map((props) => {
            const { id, href, title } = props;
            return (
              <li key={id}>
                <a href={href} className="footer-link">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((props) => {
            const { id, href, icon } = props;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  className="footer-icon"
                  rel="noreferrer"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
