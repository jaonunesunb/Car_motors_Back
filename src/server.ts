import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default app;
