export default function NavMenu({ label, link }) {
  return (
    <li className="nav-item active">
      <a className="nav-link text-white" href={link}>
        {label}
      </a>
    </li>
  );
}
