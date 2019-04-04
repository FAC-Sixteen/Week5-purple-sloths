const fs = require('fs');
const path = require('path');
const errMesg = "There was an error that you for being patient";
const request = require('request');
require('env2')('.env');

const handlerHomeRoute = (request, response)=>{
fs.readFile(path.join(__dirname, '..','public/index.html'), (err,file) => {
    if(err){
        console.log(err)
        response.writeHead(500,{'Content-Type' : 'text/html'})
        response.end(errMesg);
    }
    else {
        response.writeHead(200,{'Content-Type' : 'text/html'})
        response.end(file);
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
    const endpoint = req.url;
    const input = endpoint.split('=')[1];
    const apiUrl = `https://content.guardianapis.com/search?q=${input}&show-blocks=all&page=1&from-date=2019-01-01&api-key=${process.env.API_KEY}`;

    const apiRequest= request(apiUrl, { json: true}, (error, response, body)=>{
        if (error) {
            response.writeHead(500,{'Content-Type' : 'text/html'})
            console.log(errorRequest);
            response.end(errMesg);
        }
        else {
            res.writeHead(200,{'Content-Type' : 'application/json'});
            res.end(JSON.stringify(body));
        }
    });
}

module.exports = {
    handler404,
    handlerHomeRoute,
    handlerPublic,
    handlerGuardian
}
