const fs = require('fs');

module.exports = {
    router: (server) => {
        server.get('/ping', (req, res, next) => {
            res.send({message:"pong"});
            return next(false);
        });

        server.get("/", (req, res, next) => {
            fs.readFile(__dirname + "/pages/index.html", (err, data) => {
                if(err) console.log(err)
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
                next();
            })
            
        });

        server.get("/materialize/css", (req, res, next) => {
            fs.readFile(__dirname + "/materialize/css/materialize.min.css", (err, data) => {
                if (err) throw err;
                res.setHeader('Content-Type', 'text/css');
                res.writeHead(200);
                res.end(data);
                next(); 
             });
        });

        server.get("/materialize/js", (req, res, next) => {
            fs.readFile(__dirname + "/materialize/js/materialize.min.js", (err, data) => {
               if (err) throw err;
               res.setHeader('Content-type', 'text/javascript');
               res.writeHead(200)
               res.end(data);
               next();
            });
       });

        server.get('/images/:folder/:photo', (req, res, next) => {
            fs.readFile(__dirname + "/images/" + req.params.folder + "/" + req.params.photo, (err, data) => {
                if (err) console.log(err);
                res.setHeader('Content-type', 'image/jpeg');
                res.writeHead(200);
                res.end(data);
                next();
            });
        });
    }
}