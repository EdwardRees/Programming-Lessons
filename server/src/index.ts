import express from "express";

import request from "request";
import cors from "cors";
import httpServer from "http";
import path from "path";
import {
  buildComments,
  readCodeFromURL,
  readCodeHtmlRest,
  readCodeRest,
} from "./parser";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "static")));
const http = httpServer.createServer(app);

buildComments();

app.get("/", (req: any, res: any) => {
  res.sendFile(__dirname + "/static/index.html");
});

app.get("/scrape/:url([\\w\\W]*)/:file", (req: any, res: any) => {
  request(
    `${req.params.url}/${req.params.file}`,
    (err, response: any, body: any) => {
      let code: any;
      try {
        if (req.query.pure) {
          code = readCodeFromURL(body, req.params.file, req.params.url, false);
        } else {
          code = readCodeFromURL(body, req.params.file, req.params.url);
        }
        if (req.query.key !== undefined) {
          res.send(code[req.query.key]);
        } else {
          res.send(code);
        }
      } catch (err) {
        res.send(`${req.params.url}/${req.params.file} is invalid! Try again with a valid url!`);
      }
    }
  );

  // res.send(req.params)
});

app.get("/codes/:folder(\\w*)?/:filepath", (req: any, res: any) => {
  let fpath: any = path.join(__dirname, "parser");
  fpath = path.join(fpath, "codes");
  if (req.params.folder !== undefined) {
    fpath = path.join(fpath, req.params.folder);
  }
  let code: any;
  if (req.query.pure) {
    code = readCodeRest(`${fpath}/${req.params.filepath}`);
  } else {
    code = readCodeHtmlRest(`${fpath}/${req.params.filepath}`);
  }
  if (req.query.key !== undefined) {
    res.send(code[req.query.key]);
  } else {
    res.send(code);
  }
});

app.get("/frontend/:num", (req: any, res: any) => {
  res.sendFile(__dirname + `/static/FrontEnd/0${req.params.num}/index.html`);
});

http.listen(port, () => {
  console.info(`server started at http://localhost:${port}`);
});