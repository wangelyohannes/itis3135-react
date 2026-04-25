import { Link } from "react-router";
export default function Header() {
  return (
    <header>
      <h1>Wangel Yohannes | Wandering Yonko | ITIS 3135</h1>
      <nav>
        <Link to={"/"}>ITIS 3135</Link>
        {" | "}
        <Link to="/contract">Contract</Link>
        {" | "}
        <Link to="/website_evaluations">Website Evaluation</Link>
      </nav>
      <nav>
        <Link to="/cards">Cards</Link> | <Link to="/inventory">Inventory</Link>
        {" | "}
        <Link to="/documentation">Documentation</Link> {" | "}
        <Link to="/survey">Survey</Link> {" | "}
        <Link to="/product">Product</Link> {" | "}
        <Link to="/intro_form">Introduction Form</Link> {" | "}
        <Link to="/slideshow">Slideshow</Link> {" | "}
        <Link to="https://webpages.charlotte.edu/wyohanne/itis3135/stuff/raNdoM-pAgE.htm">
          Crappy Page
        </Link>
      </nav>
    </header>
  );
}
