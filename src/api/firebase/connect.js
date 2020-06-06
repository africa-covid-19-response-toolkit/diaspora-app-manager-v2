const connectEmulatorToApp = (db) => {
    if (window.location.hostname === "localhost") {
        db.settings({
          host: "localhost:8080",
          ssl: false
        });
      };
};

export default connectEmulatorToApp;