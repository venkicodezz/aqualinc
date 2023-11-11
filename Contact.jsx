import './Contact.css';
import contactImg from  '../../assets/contact.jpg'

const About1 =()=>{
    return (
       <div classname="cotact-back">
            <div data-text="contact.."className="contactus-text">
                <div className="contact">
                    <div className="left">
                        <img src={contactImg} alt="contact" height={400} width={400} />
                    </div>

                    <div className="right">
                        <div className="gmail">
                            <h3>Gmail</h3>
                            <a href="https://mail.google.com/" ><p>nagarajkamatagi5@gmail.com</p></a>
                        </div>
                        <div className="gmail1">
                            <h3>Whattsapp</h3><a href="http://wa.me/+918217007803"><p>Mr Nagaraj Kamatagi</p></a>
                        </div>
                        <div className="gmail2">
                            <h3>Phone</h3><a href="tel:+91-9380633832"><p>8217007803</p></a>
                        </div>
                    </div>
                </div>
            </div>
        
       </div>
    )

}
export default About1;