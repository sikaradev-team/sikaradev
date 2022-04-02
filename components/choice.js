export default function Choice({ title, description }) {
  return (
    <section className="section-choi">
      <div className="container">
        <h2 className="text-center">{title}</h2>
        <hr className="separater mb-4" />
        <div className="col-md-6 mx-auto text-center">
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
