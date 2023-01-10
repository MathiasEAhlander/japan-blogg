import express from "express";
import { resolve } from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(resolve("frontend")));

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
