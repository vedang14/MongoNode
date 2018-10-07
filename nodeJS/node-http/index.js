const http = require('http');
const fs = require('fs');
const path = require ('path');

const hostname = 'localhost';
const port = 3000;


const server = http.createServer((req,res) =>{
  console.log("request for "+ req.url + "by method"+req.method);

    if(req.metho == 'GET'){
      var fileurl ;
      if (req.url == '/') fileurl = 'index.html';
      var filepath  = path.resolve('./public'+fileurl);
      if(fileExt = '.html')
        fs.exists(filepath,(exists)) =>
        {
          if(!exists){
            res.statusCode = 404;
            res.setHeader('Content-Type','text/html');
            res.end ('<html><body><h1> error 404'+fileurl+'not found</h1></html>');

            return;

          }

          res.statusCode =200;
          res.setHeader = ('Content-Type','text/html')
          fs.createReadStream(filepath).pipe(res);
        })

      else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end ('<html><body><h1> error 404'+req.method +'not supported</h1></html>');

        return;
      }
})

server.listen(port,hostname,() => {
  console.log(`Server running at http:// ${hostname} : ${port}`)
});
