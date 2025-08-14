import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">Developed by Pierrebrunel Joseph</p>
        <p className="footer__year"> {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
