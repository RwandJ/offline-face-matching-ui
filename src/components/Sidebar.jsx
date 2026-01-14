import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        FaceMatch
      </div>

      <nav className="menu">
        <a className="menu-item active">
          <span>🏠</span>
          Dashboard
        </a>

        <a className="menu-item">
          <span>🖼️</span>
          Match Face
        </a>

        <a className="menu-item">
          <span>📜</span>
          History
        </a>

        <a className="menu-item">
          <span>⚙️</span>
          Settings
        </a>
      </nav>
    </aside>
  );
}
