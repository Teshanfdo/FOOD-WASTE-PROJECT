import Logo from "./assets/Miracle_Foundation_Logo.png";
import "./Footer.css";

export default function FooterComponent() {
  return (
    <footer id="footer" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <img src={Logo} alt="logo" style={{ maxHeight: 100 }} />

      <div className="footer-section">
        <h4>About Us</h4>

        <a href="#">Our Programs</a>
        <a href="#">Our History</a>
        <a href="#">Why Feeding America</a>
        <a href="#">Our Leadership</a>
        <a href="#">Annual Report</a>
        <a href="#">Our Partners</a>
        <a href="#">Career Opportunities</a>
        <a href="#">Press Releases</a>
        <a href="#">Podcast</a>
      </div>

      <div class="footer-section">
        <h4>Research</h4>
        <a href="#">Map the Meal Gap</a>
        <a href="#">Charitable Food Assistance</a>
        <a href="#">Coronavirus and Food Insecurity</a>
        <a href="#">College Hunger</a>
        <a href="#">Hunger and Health</a>
        <a href="#">Hunger in America Study</a>
        <a href="#">Interactive Data</a>
        <a href="#">Poverty and Unemployment</a>
        <a href="#">Race and Ethnicity</a>
        <a href="#">Senior Hunger Research</a>
        <a href="#">Teen Hunger Research</a>
      </div>

      <div>
        <h4>Ways To Give</h4>
        <ul></ul>
      </div>
    </footer>
  );
}
