import "./Logo.scss";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <section className="Logo">
      <img src={logo} alt="logo woovi" />
    </section>
  )
}

export default Logo