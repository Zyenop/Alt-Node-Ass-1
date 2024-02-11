const http = require("http");

const action = (req, res) => {
  if (req.url === "/") {
    res.end("My name is Rabiu Ahmad");
  } else {
    res.end("Why are you not on the homepage so you can known my name?!");
  }
  res.end();
};

const PORT = 8900;
const HOSTNAME = "localhost";
const server = http.createServer(action);

server.listen(PORT, HOSTNAME, null, () => {
  console.log(`Server running on port: ${PORT}`);
});
