import express from "express"
import router from "./routes"
import { connect } from "mongoose";
import { handleError } from "./middleware/handleError.middleware"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())

app.use(router);

app.use(handleError);

connect(`${process.env.MONGODB_DATABASE_URI}`, { autoCreate: true }).then(() => console.log("server connected to mongodb successfully")).catch((error) => console.error(error));

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server running on port:${process.env.SERVER_PORT} - http://localhost:${process.env.SERVER_PORT}`);
})