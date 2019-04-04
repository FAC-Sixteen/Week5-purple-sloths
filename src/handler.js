const fs = require('fs');
const path = require('path');
const errMesg = "There was an error that you for being patient";
const request = require('request');
require('env2')('.env');

const handlerHomeRoute = (request, response)=>{
  // console.log('We are in else block', response.parser.HTTPParser[0]);
fs.readFile(path.join(__dirname, '..','public/index.html'), (err,file) => {
    if(err){
        console.log(err)
        response.writeHead(500,{'Content-Type' : 'text/html'})
        response.end(errMesg);
    }
    else {
        response.writeHead(200,{'Content-Type' : 'text/html'})
        // console.log('We are in else block', response.body[0]);
        response.end(file);
        // console.log('We are in else block', file);
    }
});
}

const handlerPublic = (request, response, url) => {
    const extensionSelector = {
        html: "text/html",
        css: "text/css",
        js: "application/javascript",
        ico: "image/x-icon",
        json: "application/json",
        jpg: "image/jpeg",
        png: "image/png",
        jpeg : 'image/jpeg',
    }

    const extensionType = url.split('.')[1];
    fs.readFile(path.join(__dirname, '..',url), (err,file) => {
        if(err){
            console.log(err)
            response.writeHead(500,{'Content-Type' : 'text/html'})
            response.end(errMesg);
        }
        else {
            response.writeHead(200,{'Content-Type' : extensionSelector[extensionType]});
            response.end(file);
        }
    }  );
}

const handler404 =(request,response) => {fs.readFile(path.join(__dirname, '..','public/error.html'), (err,file) => {
    if(err){
        console.log(err)
        response.writeHead(500,{'Content-Type' : 'text/html'})
        response.end(errMesg);
    }
    else {
        response.writeHead(404,{'Content-Type' : 'text/html'})
        response.end(file);
    }
});
}

const handlerGuardian = (req, res) => {
    console.log('This is in the handler', req.url);
    const endpoint = req.url;
    const input = endpoint.split('=')[1];
    const apiUrl = `https://content.guardianapis.com/search?q=${input}&api-key=${process.env.API_KEY}`;
   console.log(apiUrl);

    const apiRequest= request(apiUrl, { json: true}, (error, response, body)=>{
        if (error) {
            response.writeHead(500,{'Content-Type' : 'text/html'})
            console.log(errorRequest);
            response.end(errMesg);
        }
        else {
            console.log(body);
            res.writeHead(200,{'Content-Type' : 'application/json'});
            const trial = JSON.stringify(apiRequest);
            res.end(trial);
        }
    });

  

}


module.exports = {
    handler404,
    handlerHomeRoute,
    handlerPublic,
    handlerGuardian
}
