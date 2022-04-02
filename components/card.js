export default function Card({ title, description }) {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="dev-card">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
