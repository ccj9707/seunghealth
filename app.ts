import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(express.static("workspace"));
app.use(express.static("bower_components"));

app.use((err: Error, req, res, next) => {
  res.json({
    status: 500,
    message: err.message
  });
});

export { app };
