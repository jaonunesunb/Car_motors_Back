import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

(async () => {
  await AppDataSource.initialize()
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    })
    .then(() => {
      console.log("Database connected!");
      app.listen(3001, () => {
        console.log("Servidor executando em http://localhost:3001");
      });
    });
})();
