import { Navbar, NavbarBrand } from 'reactstrap';
import BeerLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand>
                <img src={BeerLogo} alt='nucamp logo' />
            </NavbarBrand>
        </Navbar>
    )
};

export default Header;