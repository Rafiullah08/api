import express from 'express'
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(PORT, () => console.log("Server ready on port 3000."));

