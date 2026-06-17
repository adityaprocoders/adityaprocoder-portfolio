import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import homeRoutes from "./routes/homeRoutes.js";

dotenv.config();

const app = express();
const Port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/", homeRoutes);

// 4. Server Start (Sabse niche)
app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});