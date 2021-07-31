import "./contact.scss";
import hands from "../../images/shake.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__content wrapper">
        <div className="contact__box--left box ">
          <h2 className="contact__heading">Kontakt</h2>

          <form className="contact__form" action="https://formsubmit.co/your@email.com" method="POST">
            <input type="text" name="name" placeholder="Imię" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Wiadomość"></textarea>
            <button className="contact__form--button buttons" type="submit">
              Wyślij
            </button>
          </form>
        </div>
        <div className="contact__box--right box">
          <ul className="contact__icons">
            <li className="contact__icons--item">
              <a href="https://www.facebook.com/norbert.niechocko">
                <FacebookIcon />
                /norbert.niechocko
              </a>
            </li>
            <li className="contact__icons--item">
              <LocationOnIcon />
              Białystok
            </li>
            <li className="contact__icons--item">
              <EmailIcon />
              niechocko@wp.pl
            </li>
          </ul>
          <img src={hands} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
