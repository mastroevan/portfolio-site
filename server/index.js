import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res)=> {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});