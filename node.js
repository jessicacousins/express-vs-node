// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "application/json");

//   if (req.method !== "POST" || req.url !== "/user") {
//     res.statusCode = 405;
//     res.end('{"Error": "METHOD_NOT_ALLOWED"}');
//     return;
//   }

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
//       res.end('{"error": "CANNOT_PARSE" }');
//     }
//     res.end(
//       JSON.stringify({
//         error: false,
//         username: parsed.username,
//       })
//     );
//   });
//   server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000/");
//   });
// });

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST" || req.url !== "/order") {
    res.statusCode = 405;
    res.end('{"Error": "METHOD_NOT_ALLOWED"}');
    return;
  }

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
      res.end('{"error": "CANNOT_PARSE" }');
    }
    res.end(
      JSON.stringify({
        error: false,
        orderNumber: parsed.orderNumber,
      })
    );
  });
  server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
  });
});
