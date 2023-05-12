import "reflect-metadata";
import "express-async-errors";
import express from "express";
import "reflect-metadata";
import cors from "cors";
import handleError from "./errors/handleError";
import userRouter from "./routes/users.routes";
import addressRoutes from "./routes/address.routes";
import commentsRouter from "./routes/comments.routes";
import loginRouter from "./routes/login.routes";
import carsRouter from "./routes/cars.routes";
import modelRouter from "./routes/modelsCars.routes";
import imageRouter from "./routes/image.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/address", addressRoutes);

app.use("/user", userRouter);

app.use("/comments", commentsRouter);

app.use("/login", loginRouter);

app.use("/cars", carsRouter);

app.use("/model", modelRouter);

app.use("/image", imageRouter);

app.use(handleError);

export default app;
