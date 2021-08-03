import "./about.scss";
import GetAppIcon from "@material-ui/icons/GetApp";
import painting from "../../images/merlyn.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__content wrapper ">
        <div className="box-text">
          <h2 className="title">
            Kim
            <br /> jestem?
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum repellat itaque blanditiis eligendi doloremque quibusdam quasi. Quos at iste tempore dignissimos veniam mollitia
            dolores quas ratione atque molestias eligendi, ab rerum sapiente. Consequuntur doloribus natus numquam aperiam quo veniam obcaecati illum, quas dicta, velit perspiciatis quidem unde nemo
            architecto.
          </p>
          <div className="button">
            <a className="button__download  buttons" href="https://drive.google.com/file/d/1hIRc2UfEJkeO5l9iqB1q599Y25GcMJ5n/view" target="_blank" rel="noreferrer">
              CV
              <GetAppIcon className="button__download--icon" />
            </a>
          </div>
        </div>

        <div className="box-img">
          <img src={painting} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
