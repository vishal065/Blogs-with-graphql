"scripts": {
  "start": "bun build/index.js",
  "dev": "bun run build/index.js --watch"
}


 "scripts": {
    "start": "node build/index.js",
    "dev": "tsc-watch --onSuccess \"npm start\""
  },

    "start": "bun run build/index.js",
  "build": "tsc",  // or your actual build command
  "dev": "bun run build --watch"
