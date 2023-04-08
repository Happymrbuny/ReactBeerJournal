import BeerCard from './features/beers/BeerCard';
import { BEERS } from './app/shared/BEERS';
import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import BeerLogo from './app/assets/img/logo.png';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand>
            <img src={BeerLogo} alt='nucamp logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      <BeerCard beer={BEERS[0]} />
    </div>
  );
}

export default App;
