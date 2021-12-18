import '../styles/layout/Header.scss';
import headerLogo from '../images/header_logo.png';
const Header = () => {
    return (
        <header className="header">
            <img className="header_logo" src={headerLogo} alt="header logo" />
            <h1 className="header_title">Book Collection</h1>
        </header>
    )
}
export default Header;