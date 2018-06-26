const init = require("./init-package-json");

init(
  process.cwd(),
  "",
  {},
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(JSON.stringify(data, null, 2));
    console.log("\n\nYour React build system is ready to go!\n\nNow run:\n")
    console.log("  Install dependencies:")
    console.log("    npm install\n")
    console.log("  Production build:")
    console.log("    npm run build\n")
    console.log("  Development build (watcher):")
    console.log("    npm run dev\n")
  }
);
