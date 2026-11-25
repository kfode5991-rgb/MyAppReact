
import React, { useEffect, useState } from "react";

function App() {
  const [apiStatus, setApiStatus] = useState("Checking...");
  const [mongoStatus, setMongoStatus] = useState("Checking...");

  useEffect(() => {
    fetch("http://localhost:9000/api/health")
      .then((response) => {
        if (!response.ok) throw new Error("API error");
        return response.json();
      })
      .then((data) => {
        setApiStatus("Connected");
        setMongoStatus("Operational");
      })
      .catch(() => {
        setApiStatus("Disconnected");
        setMongoStatus("Unavailable");
      });
  }, []);

  const cardStyle = {
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    flex: "1",
    minWidth: "200px",
  };

  const statusStyle = {
    color: "#16a34a",
    fontWeight: "bold",
    fontSize: "18px",
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f1f5f9",
      fontFamily: "Arial, sans-serif",
      color: "#1e293b"
    }}>
      <header style={{
        background: "#0f172a",
        color: "white",
        padding: "30px",
        textAlign: "center"
      }}>
        <h1>MyAppReact</h1>
        <p>Docker - MERN Application Dashboard</p>
      </header>

      <main style={{ padding: "40px", maxWidth: "1100px", margin: "auto" }}>
        <h2>System Dashboard</h2>
        <p>Monitor the status of your application services.</p>

        <div style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px"
        }}>
          <div style={cardStyle}>
            <h3>Frontend</h3>
            <p>React Application</p>
            <p style={statusStyle}>● Running</p>
            <p>Port: 3000</p>
          </div>

          <div style={cardStyle}>
            <h3>Backend</h3>
            <p>Node.js / Express API</p>
            <p style={{
              color: apiStatus === "Connected" ? "#16a34a" : "#f59e0b",
              fontWeight: "bold"
            }}>
              ● {apiStatus}
            </p>
            <p>Port: 9000</p>
          </div>

          <div style={cardStyle}>
            <h3>Database</h3>
            <p>MongoDB</p>
            <p style={{
              color: mongoStatus === "Operational" ? "#16a34a" : "#f59e0b",
              fontWeight: "bold"
            }}>
              ● {mongoStatus}
            </p>
            <p>Port: 27017</p>
          </div>
        </div>

        <div style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          marginTop: "30px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        }}>
          <h2>Application Architecture</h2>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            alignItems: "center",
            marginTop: "20px"
          }}>
            <div style={{
              background: "#dbeafe",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center"
            }}>
              <strong>React Client</strong>
              <p>Port 3000</p>
            </div>

            <span style={{ fontSize: "25px" }}>→</span>

            <div style={{
              background: "#dcfce7",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center"
            }}>
              <strong>Node.js Server</strong>
              <p>Port 9000</p>
            </div>

            <span style={{ fontSize: "25px" }}>→</span>

            <div style={{
              background: "#fef3c7",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center"
            }}>
              <strong>MongoDB</strong>
              <p>Port 27017</p>
            </div>
          </div>
        </div>

        <footer style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#64748b"
        }}>
          <p>Docker Compose | MERN Architecture</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
