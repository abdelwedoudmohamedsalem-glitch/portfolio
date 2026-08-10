import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Logo />
        <p>© {new Date().getFullYear()} Mohamed Salem Abdel Wedoud</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
