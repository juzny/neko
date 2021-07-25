import "./hero.scss";
import avatar from "../../images/norbert.png";
import Typical from "react-typical";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__img">
          <div className="hero__img--box">
            <img src={avatar} alt="man" />
          </div>
        </div>

        <div className="hero__text">
          <div className="hero__text--box">
            <h1 className="name">
              Norbert
              <br />
              Niechoćko
            </h1>
            <p className="info">
              <Typical loop={Infinity} wrapper="p" steps={["Fotografia", 1200, "Malarstwo", 1200, "Projektowanie CAD", 1200]} />
            </p>
            <a className="works buttons" href="#portfolio">
              moje prace
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
