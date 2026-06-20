const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.write("Hello from Node Docker App");
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
