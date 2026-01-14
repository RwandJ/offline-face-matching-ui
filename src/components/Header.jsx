import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Offline Face Matching</h1>

      <div className="header-status">
        <span className="dot"></span>
        System Ready
      </div>
    </header>
  );
}
