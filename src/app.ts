import express from "express";
import cors from "cors";
import factRoutes from "../routes/factRoutes";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/facts", factRoutes);

export default app;
