import "./Footer.css";

function Footer() {
    return (
        <footer  className="footer">
        <div className="footer__container">
        <span className="footer__text">Developed by Pierrebrunel Joseph</span>
        <span className="footer__year"> {new Date().getFullYear()}</span>
</div>
        </footer>

    )
}

export default Footer;