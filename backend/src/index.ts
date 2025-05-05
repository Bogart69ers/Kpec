import express from "express";
import cors from "cors";  // Import cors
import userRoutes from "./routes/userRoutes";

const app = express();
const port = 3000;

app.use(cors());  // Enable CORS
app.use(express.json());

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
