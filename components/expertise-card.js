export default function ExpertiseCard({ icon, title, description }) {
  return (
    <div className="col-sm-4">
      <div className="domaines-card">
        <div className="icon-bg">
          <i className={icon}></i>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
