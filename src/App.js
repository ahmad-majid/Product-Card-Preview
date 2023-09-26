import React from 'react';
import './App.css'
import { Link } from 'react-router-dom'; // Remove useNavigate
import productDesktop from './images/image-product-desktop.jpg'
import productCart from './images/icon-cart.svg'

const App = () => {
  return (
    <div className="container">
      <div className="grid">
        <div className="img">
          <img src={productDesktop} alt="product-icon" />
        </div>
        <div className="card-content">
          <h6 className="pro-cat">Perfume</h6>
          <h2 className="pro-name">Gabrielle Essence Eau De Parfum</h2>
          <p className="pro-des">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="price">
            <p className="current-price">$149.99</p>
            <p className="old-price">$169.99</p>
          </div>
          <Link to="/thank-you"> {/* Use Link component */}
            <button className="cta">
              <img src={productCart} alt="icon-card" />Add to Cart
            </button>
          </Link>
       
        </div>
    
      </div>
      <footer className="footer">
        <p>
          Challenge by{' '}
          <a href="https://www.frontendmentor.io/profile/ahmad-majid" target="noopener">
            Frontend Mentor
          </a>. Coded by{' '}
          <a href="https://www.linkedin.com/in/ahmad-majid-957ba9200" target="noopener">
            Ahmad Majid
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
