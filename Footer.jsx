import './Footer.css';

const Footer = () => {
  return (
    <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    
  <div className="footer">
    {/* <h1>Footer Bar</h1> */}
    <div class="footer">
      <div class="heading">
        <h2>Aqualinc<sup>Beverages</sup></h2>
      </div>
      <div class="content">
        <div class="services">
          <h4>Services</h4>
          <p><a href="#">Home delivery</a></p>
          <p><a href="#">Digital Marketing</a></p>
          <p><a href="#">Online order</a></p>
          <p><a href="#">Contract Business</a></p>
        </div>
        <div class="social-media">
          <h4>Social</h4>
          <p>
            <a href="#"
            ><i class="fab fa-linkedin"></i> Linkedin</a
            >
          </p>
          <p>
            <a href="#"
            ><i class="fab fa-twitter"></i> Twitter</a
            >
          </p>
          <p>
            <a href="https://github.com/farazc60"
            ><i class="fab fa-github"></i> Github</a
            >
          </p>
          <p>
            <a href="https://www.facebook.com/codewithfaraz"
            ><i class="fab fa-facebook"></i> Facebook</a
            >
          </p>
          <p>
            <a href="https://www.instagram.com/codewithfaraz"
            ><i class="fab fa-instagram"></i> Instagram</a
            >
          </p>
        </div>
        <div class="links">
          <h4>Quick links</h4>
          <p><a href="#">Home</a></p>
          <p><a href="#">About</a></p>
          <p><a href="#">Our Products</a></p>
          <p><a href="#">Contact</a></p>
        </div>
        <div class="details">
          <h4 class="address">Address</h4>
          <p>
            239,2A BEHIND BUS DEPOT,DIST-BAGALAKOT MUDHOL <br />
            BAGALAKOT KA 587313 IN KARNATAKA india 587313!
          </p>
          <h4 class="mobile">Mobile</h4>
          <p><a href="tel:+91-9380633832">+91-9380633832</a></p>
          <h4 class="mail">Email</h4>
          <a href="https://mail.google.com/"><p>aqualinklinkbeverages@gmail.com</p></a>
        </div>
      </div>
      <footer>
        <hr />
        © 2023 Aqualinc-Beverages.
      </footer>
    </div>
    
</div>
  </div>

  );

}
export default Footer;