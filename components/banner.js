import GetInTouchButton from "./getin-touch-button";
import SocialIcons from "./sociale-icons";

export default function Banner({ title, description }) {
  const buttonText = "GET IN TOUCH";
  return (
    <section className="bg-secondary vh-600 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <h1>{title}</h1>
            <p className="text-white">
              <b>
                Sikara<span>Dev</span>
              </b>{" "}
              {description}
            </p>
            <GetInTouchButton text={buttonText} />
          </div>
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}
