  
const createResponse = require('./createResponse');

describe('createResponse', () => {
  it('creates a valid HTTP response', () => {
    const response = createResponse({
      body: 'hi there',
      status: '200 OK',
      contentType: 'text/html'
    });

    expect(response).toEqual(`HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 8
Content-Type: text/html
hi there`);
  });
});
