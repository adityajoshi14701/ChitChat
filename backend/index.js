import { app } from "a";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/db/index.js";
connectDB().then(() => {
  app
    .listen(process.env.PORT, () =>
      console.log("listening on port " + process.env.PORT),
    )
    .catch((err) => console.error("Mongo DB connection failed !!!", err));
});
