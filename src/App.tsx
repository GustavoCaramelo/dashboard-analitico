import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: "20px" }}>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
