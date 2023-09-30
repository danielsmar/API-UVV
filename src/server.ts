import express from "express";

import * as dotenv from "dotenv";
import PostRouter from "./routes/PostRoutes";
import UserRoute from "./routes/UsersRoutes";

dotenv.config({ path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env" });

const app = express();

app.use(express.json());

app.use("/api", PostRouter);
app.use("/api", UserRoute);

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
} else {
  console.log("Fail to load environment");
}
