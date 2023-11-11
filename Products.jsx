import "./Products.scss";
import waterbottle from "../../assets/removebg.png";



const Products = () => {
    return <div className="hindu">
    <div className="product-card">
        <div className="header">
            <h1>Our Products</h1>
        </div>
        <div class="products">
        <div class="product">
            <div class="p-img">
                <img src={waterbottle} alt=""/>
            </div>
      
            <p> 1 Litre Water Bottle</p>
            <span>1 ltr</span>
                <div class="btn">
                <a id="call-btn" href="tel:+91-9380633832"><p>Call Now</p></a>
                
                </div>
          
        </div>
        <div class="product">
            <div class="p-img">
            <img src={waterbottle} alt=""/>
            </div>
            <p> 1 Litre Water Bottle</p>
            <span>1 ltr</span><br/>
            <div class="btn">
            <a id="call-btn" href="tel:+91-9380633832"><p>Call Now</p></a>
    
                </div>
        </div>
        <div class="product">
            <div class="p-img">
            <img src={waterbottle} alt=""/>
            </div>
            <p> 1 Litre Water Bottle</p>
            <span>1 ltr</span><br/>
            <div class="btn">
            <a id="call-btn" href="tel:+91-9380633832"><p>Call Now</p></a>
         
            </div>
        </div>
        <div class="product">
            <div class="p-img">
            <img src={waterbottle} alt=""/>
            </div>
            <p> 1 Litre Water Bottle</p>
            <span>1 ltr</span><br/>
            <div class="btn">
            <a id="call-btn" href="tel:+91-9380633832"><p>Call Now</p></a>
        
            </div>
        </div>
        <div class="product">
            <div class="p-img">
            <img src={waterbottle} alt=""/>
            </div>
            <p> 1 Litre Water Bottle</p>
            <span>1 ltr</span><br/>
            <div class="btn">
            <a id="call-btn" href="tel:+91-9380633832"><p>Call Now</p></a>
    
            </div>
        </div>
        <div class="product">
            <div class="p-img">
            <img src={waterbottle} alt=""/>
            </div>
            <p> 1 Litre Water Bottle</p>
            <span>1 ltr</span><br/>
            <div class="btn">
            <a id="call-btn" href="tel:+91-9380633832"><p>Call Now</p></a>

            </div>
        </div>
    </div>
   <div></div>
    </div>
    </div>
};

export default Products;

