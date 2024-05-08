import { app } from "./app.js";
import mongoose from "mongoose";

// conertar la base de datos
mongoose
  .connect(process.env.MONGODB_DATABASE_URI)
  .then(() => console.log("server connected to mongodb successfully"))
  .catch((error) => console.error(error));

// levantar el servidor
app.listen(3000, () => {
  console.log(`server running on port:${3000} - http://localhost:${3000}`);
});
