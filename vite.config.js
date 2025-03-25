// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

// export default defineConfig({
//   plugins: [
//     react(),
//     imagetools(), // Add the imagetools plugin
//   ],
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), imagetools()],
  server: {
    historyApiFallback: true, // optional for local dev
  },
  build: {
    outDir: "dist",
  },
});
