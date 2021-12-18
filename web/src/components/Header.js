import '../styles/layout/Header.scss';
import headerLogo from '../images/header_logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header_link" title="Go to homepage">
                <img className="header_logo" src={headerLogo} alt="header logo" />
            </Link>
            <h1 className="header_title">Book Collection</h1>
        </header>
    )
}
export default Header;