export default function About({ title, descriptions }) {
  return (
    <section className="section-about">
      <div className="container">
        <h2 className="text-center">{title}</h2>
        <hr className="separater mb-4" />
        <div className="row align-items-center gap-4">
          <div className="col-md-6 figure">
            <img src="images/login.jpg" alt="" />
          </div>
          <div className="col-md-6 text-white">
            {descriptions.map(({ description }, index) => (
              <p key={index}>{description}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
