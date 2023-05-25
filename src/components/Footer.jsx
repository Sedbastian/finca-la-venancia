import "./styles/Footer.css"
import GitHubSvg from "./GitHubSvg";

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/Sedbastian" className="sedbastian">
        Sedbastian
      </a>
      <a
        href="https://github.com/Sedbastian/shopping-cart"
        className="github"
        title="githubRepo"
      >
        <GitHubSvg />
      </a>
      <div className="year">2023</div>
    </footer>
  );
}
