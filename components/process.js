import Card from "./card";

export default function Process({ title, cards }) {
  return (
    <section className="section-dev">
      <div className="container">
        <h2 className="text-center mb-2">{title}</h2>
        <hr className="separater mb-4" />
        <br />
        <div className="row justify-content-center g-4">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
