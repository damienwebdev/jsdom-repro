const server = require('./server/main');

const PORT = process.env.PORT || 4000;

// Start up the Node server
server.app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
});

process.on('SIGINT', function () {
    process.exit();
});