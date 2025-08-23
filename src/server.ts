import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

// Initialize the database connection once when the module is loaded.
// In a serverless environment (such as Vercel) we shouldn't start an HTTP
// listener manually. Instead, we export the Express application so the
// platform can handle incoming requests and use our app as a handler.
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default app;
