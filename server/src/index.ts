import express from "express";
import cors from "cors";
import os from "os";

const app = express();

// Middleware
app.use(cors({ origin: "*" })); // Allow all origins
app.use(express.json());

// Routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "OK" });
});

// Port setup
const PORT = Number(process.env.PORT) || 5000;

// Function to get local LAN IP
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    if (iface) {
      for (const details of iface) {
        if (details.family === "IPv4" && !details.internal) {
          return details.address;
        }
      }
    }
  }
  return null;
}

const localIP = getLocalIP();

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running!`);
  console.log(`- Local: http://localhost:${PORT}`);
  if (localIP) console.log(`- LAN: http://${localIP}:${PORT}`);
});
