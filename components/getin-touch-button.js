export default function GetInTouchButton({ text,navLink }) {
  return (
    <>
      <a
        href=""
        className={`btn btn-link text-white ${navLink ? "nav-link" : ""}`}
      >
        {text}
      </a>
    </>
  );
}
