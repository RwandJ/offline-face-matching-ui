import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import FaceUpload from "./components/FaceUpload";

export default function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />

        <main
  style={{
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <FaceUpload />
</main>

      </div>
    </div>
  );
}
