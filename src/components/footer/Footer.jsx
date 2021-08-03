import "./footer.scss";

import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content wrapper">
        <p className="privacy_policy">
          <a href="https://www.google.pl/">Polityka prywatności</a>
        </p>
        <h3>Neko. &copy; 2021</h3>
      </div>
    </div>
  );
}

export default Footer;
