import express from "express";
import cors from "cors";
import factRoutes from "./routes/factRoutes";
import "dotenv/config";
import setupSwagger from "./swagger";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/facts", factRoutes);

setupSwagger(app);

export default app;
