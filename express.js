// express example
// const express = require("express");
// const app = express();

// app.post("/user", (req, res) => {
//   let body = "";

//   req.on("data", (data) => {
//     body += data;
//   });

//   req.on("end", () => {
//     let parsed;

//     try {
//       parsed = JSON.parse(body);
//     } catch (e) {
//       res.statusCode = 400;
//       res.json({
//         error: "CANNOT_PARSE",
//       });
//     }

//     res.json({
//       error: false,
//       username: parsed.username,
//     });
//   });

//   app.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
//   });
// });

const express = require("express");
const app = express();

app.post("/order", (req, res) => {
  let body = "";

  req.on("data", (data) => {
    body += data;
  });

  req.on("end", () => {
    let parsed;

    try {
      parsed = JSON.parse(body);
    } catch (e) {
      res.statusCode = 400;
      res.json({
        error: "CANNOT_PARSE",
      });
      return;
    }
    res.json({
      error: false,
      orderNumber: parsed.orderNumber,
    });
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
