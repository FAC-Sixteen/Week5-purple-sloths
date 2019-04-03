const handler = require('./handler');

const router = (request, response) => {
    const url =  request.url;
    console.log(url);
    if (url === "/") {
     handler.handlerHomeRoute(request, response)
    } 
     else if (url.includes('/public')) {
      handler.handlerPublic(request, response, url);
    }
    else {
    handler.handler404(request, response);
    }
    };
    
    module.exports = router;