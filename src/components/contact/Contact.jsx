import "./contact.scss";
import { useForm, ValidationError } from "@formspree/react";
import hands from "../../images/shake.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";

const Contact = () => {
  const [state, handleSubmit] = useForm("xrgryprq");

  return (
    <div className="contact" id="contact">
      <div className="contact__content wrapper">
        <div className="contact__box--left box ">
          <h2 className="contact__heading">Kontakt</h2>

          <form onSubmit={handleSubmit} className="contact__form" method="POST">
            <input type="text" name="name" placeholder="Imię" required />
            <input id="email" type="email" name="email" placeholder="Email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea id="message" name="message" placeholder="Wiadomość"></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button className="contact__form--button buttons" type="submit" disabled={state.submitting}>
              Wyślij
            </button>
            {state.succeeded && <span className="response">Dziękuję! Odezwę się wkrótce 😉 </span>}
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
          <div className="contact__image">
            <img src={hands} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
