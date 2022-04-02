export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container">
        <h1 className="logo text-center">
          <img src="images/logo.svg" alt="" />
        </h1>
        <div className="social-icon d-flex col-md-2 justify-content-center gap-4 mx-auto">
          <div className="icon-bg">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="icon-bg">
            <i className="fab fa-google"></i>
          </div>
          <div className="icon-bg">
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
        <p className="text-center">
          sikaradev@sikaradev.com <br /> +261 34 73 511 95
          <br /> Lot IIC23FJ Ambatomaro 101 Antananarivo, MADAGASCAR
        </p>
        <p className="text-center">&copy;copyright SikaraDev-2022</p>
      </div>
    </footer>
  );
}
