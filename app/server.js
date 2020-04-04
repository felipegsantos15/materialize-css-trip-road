const route = require("./router");
const restify = require("restify");
const server = restify.createServer({
    strictFormatters: false
});

route.router(server);
server.listen(5566, () => {
    console.log('listen on port %s', server.url);
})
