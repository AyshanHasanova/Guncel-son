import React from 'react'

const Footer = () => {
  return (
  <>
  <footer>
  <div className="footer-container">
    
    {/* Top Section */}
    <div className="footer-top">
      
      {/* Left Sections */}
      <div className="footer-columns">
        
        {/* Company */}
        <div className="footer-section">
          <h4>Company</h4>
          <p>Find a location nearest <br /> you. See <span>Our Stores</span></p>
          <p><strong>+391 (0)35 2568 4593</strong></p>
          <p>hello@domain.com</p>
        </div>

        {/* Useful Links & Information together */}
        <div className="footer-links-group">
          <div className="footer-section">
            <h4>Useful links</h4>
            <a href="#">New Products</a>
            <a href="#">Best Sellers</a>
            <a href="#">Bundle & Save</a>
            <a href="#">Online Gift Card</a>
          </div>
          <div className="footer-section">
            <h4>Information</h4>
            <a href="#">Start a Return</a>
            <a href="#">Contact Us</a>
            <a href="#">Shipping FAQ</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

      </div>

      {/* Right Section */}
      <div className="footer-subscribe">
        <h4>Good emails</h4>
        <p>Enter your email below to be the first to know about new collections and product launches.</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="footer-bottom">
      <div className="footer-copy-social">
        <p>© Glowing 2022</p>
        <div className="social-icons">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div className="footer-logo">
        <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/elementor/thumbs/logo-black-pollo2rrr9op85vlueyalq3ndsvd1guppjav5e9o04.png" alt="Logo" />
      </div>
      <div className="footer-payments">
        <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/icon-pay.png" alt="Payments" />
      </div>
    </div>

  </div>
</footer>


  </>
  )
}

export default Footer