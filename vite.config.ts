import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import fs from "node:fs";
import { viteStaticCopy } from "vite-plugin-static-copy";
import liveReload from "vite-plugin-live-reload";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to find addon entry points
const getAddonEntries = () => {
  const addonsDir = resolve(__dirname, "src/addons");
  const addonEntries: Record<string, string> = {};
  try {
    const addonFolders = fs
      .readdirSync(addonsDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    for (const folder of addonFolders) {
      const entryFile = resolve(addonsDir, folder, "index.ts");
      if (fs.existsSync(entryFile)) {
        addonEntries[`addons/${folder}`] = entryFile;
      }
    }
  } catch (error) {
    console.warn(
      "Could not read addon directories. If you have addons, make sure they are in src/addons/[addonName]/index.ts",
      error
    );
  }
  return addonEntries;
};

export default defineConfig({
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/core/main.ts"),
        ...getAddonEntries(),
      },
      output: {
        format: "es",
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === "main") return "core/main.js";
          if (chunkInfo.name.startsWith("addons/")) {
            return `${chunkInfo.name}.js`;
          }
          return "[name].js";
        },
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "manifest.json",
          dest: ".",
        },
        {
          src: "src/core/main.html",
          dest: "core",
        },
        {
          src: "icons/*",
          dest: "icons",
        },
      ],
    }),
    liveReload(["src/**/*.html", "src/**/*.ts"]),
  ],
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
});
