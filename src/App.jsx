import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import FaceCompare from "./components/FaceCompare";

export default function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT CONTENT AREA */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* TOP HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main
          style={{
            flex: 1,
            padding: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            background: "#f1f5f9",
          }}
        >
          <FaceCompare />
        </main>
      </div>
    </div>
  );
}
