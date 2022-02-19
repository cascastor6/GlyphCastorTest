import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Breadcrumbs from './components/Breadcrumbs';
import ProductPage from './components/ProductPage';
import { CurlyFries, TornadoFries, SweetPotatoFries, CrinkleFries, ChiliFries } from './classes/Food';
import RelatedFood from './components/RelatedFoods';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';


function App() {
  const initStateBreadcrumbs = ['Home', 'Snacks', 'Fries', 'Curly Fries']
  const [breadcrumbs, setBreadcrumbs] = useState(initStateBreadcrumbs)

  return (
    <div>
      <Navbar/>
      <hr></hr>     
      <Breadcrumbs crumbs={breadcrumbs}/>
      <Container className='body'>
        <ProductPage menuItem={CurlyFries}/>
        
      </Container>
      <hr></hr>
      <Container fluid className='body'>
        <RelatedFood relatedFoods={[TornadoFries, SweetPotatoFries, CrinkleFries, ChiliFries]}/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
