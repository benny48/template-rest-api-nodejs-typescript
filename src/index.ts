import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();
const port: number = 4000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({data: "Hello World!"});
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})