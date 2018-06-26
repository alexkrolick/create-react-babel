#!/usr/bin/env node

const init = require("./init-package-json");

const yes =
  process.argv.includes("--yes") || process.argv.includes("-y");

init(process.cwd(), "", { yes: yes }, function(err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("\n\nYour React build system is ready to go!\n\nNow run:\n");
  console.log("  ⚡️ Install dependencies:");
  console.log("     npm install\n");
  console.log("  🚦 Production build:");
  console.log("     npm run build\n");
  console.log("  🚧 Development build (watcher):");
  console.log("     npm run dev\n");
});

