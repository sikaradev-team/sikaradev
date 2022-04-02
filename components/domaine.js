import ExpertiseCard from "./expertise-card";

export default function Domaine({ title, description, technos }) {
  return (
    <section className="section-domaines">
      <div className="container">
        <h2 className="text-center">{title}</h2>
        <hr className="separater mb-4" />
        <div className="col-md-7 mx-auto text-center">
          <p className="te">{description}</p>
        </div>
        <div className="row justify-content-center align-items-center">
          {technos.map((techno, index) => (
            <ExpertiseCard key={index} {...techno} />
          ))}
        </div>
      </div>
    </section>
  );
}
