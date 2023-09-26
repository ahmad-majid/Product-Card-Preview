import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Thankyou.css'; 

function ThankYou() {
  const navigate = useNavigate();

  const handleDismiss = () => {
    navigate('/');
  };

  return (
    <div className="centered-box">
      <div className="box">
        <div className="tick-icon">✓</div>
        <h2 className="success-heading">Thanks For Your Purchase</h2>
        <span>
          Your order has been successfully placed. We appreciate your business!
        </span>
        <button type="button" className="submit-button" onClick={handleDismiss}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
