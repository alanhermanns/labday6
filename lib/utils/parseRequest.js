module.exports = rawRequest => {
  let methodEx = /(PUT|GET|PATCH|DELETE|POST)/gm;
  let urlParamsWithPathEx = /\/+\w+[a-zA-Z]/gm;
  let urlParamsWithoutPathEx = /(\/)/;
  let bodyEx = /({")\w[":"a-zA-Z}]+/gm;

  let method = methodEx.exec(rawRequest);
  method = method[0];

  let path = urlParamsWithPathEx.exec(rawRequest);
  if(!path){
    path = urlParamsWithoutPathEx.exec(rawRequest);
  }

  let body = bodyEx.exec(rawRequest);
  if(body){
    return {
      method : `${method}`,
      path : `${path[0]}`,
      body : `${body[0]}`
    };
  }
  else return {
    method : `${method}`,
    path : `${path[0]}`
  };
};
