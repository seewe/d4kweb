import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

const certDir = path.resolve(__dirname, "certs");
const certFile = path.join(certDir, "localhost.pem");
const keyFile = path.join(certDir, "localhost-key.pem");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
  },
  server: {
    host: true, // expose --host
    port: 5173,
    https:
      fs.existsSync(certFile) && fs.existsSync(keyFile)
        ? { cert: fs.readFileSync(certFile), key: fs.readFileSync(keyFile) }
        : true,
  },
});
