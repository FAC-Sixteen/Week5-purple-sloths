const handler = require('./handler');

const router = (request, response) => {
    const url =  request.url;

    if (url === "/") {
     handler.handlerHomeRoute(request, response);
    }
     else if (url.includes('/public')) {
      handler.handlerPublic(request, response, url);
    } else if (url.includes('/guardian')) {
     
      handler.handlerGuardian(request, response);
    }
    else {
    handler.handler404(request, response);
    }
    };

    module.exports = router;
