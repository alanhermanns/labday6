const request = require('supertest');
const { app } = require('../lib/app');
describe('createResponse', () => {
  it('will send back html with h1 of hi on a get / method', () => {
    return request(app)
      .get('/')
      .then(res => () => {
        expect(res.text).toEqual(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>hi</title>
</head>
<body>
   <h1>hi</h1> 
</body>
</html>`);
      })
      .catch('Error');
  });

  it('will send back html with h1 of green on a get /green method', () => {
    return request(app)
      .get('/green')
      .then(res => () => {
        expect(res.text).toEqual(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>green</title>
</head>
<body>
   <h1>green</h1> 
</body>
</html>`);
      })
      .catch('Error');
  });

  it('will send back html with h1 of blue on a get /blue method', () => {
    return request(app)
      .get('/green')
      .then(res => () => {
        expect(res.text).toEqual(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>blue</title>
</head>
<body>
   <h1>blue</h1> 
</body>
</html>`);
      })
      .catch('Error');
  });

  it('will send back html with h1 of red on a get /red method', () => {
    return request(app)
      .get('/green')
      .then(res => () => {
        expect(res.text).toEqual(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>red</title>
</head>
<body>
   <h1>red</h1> 
</body>
</html>`);
      })
      .catch('Error');
  });
  
  it('will send back html with h1 of ha on a get /ha method', async() => {
    
    return request(app)
      .post('/ha')
      .then(res => () => {
        expect(res.text).toEqual(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ha</title>
</head>
<body>
   <h1>ha</h1> 
</body>
</html>`);
      })
      .catch('Error');
  });

});

