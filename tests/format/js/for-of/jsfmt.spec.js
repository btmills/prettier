run_spec(__dirname, ["babel", "flow", "typescript"], {
  errors: { espree: ["async-identifier.js"] },
});
