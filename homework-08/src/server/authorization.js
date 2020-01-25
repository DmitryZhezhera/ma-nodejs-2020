function authorization(req, res) {
  let login = false;
  const auth = req.headers.authorization;
  // console.log(auth);
  if (auth) {
    const tmp = auth.split(' ');
    const buf = Buffer.from(tmp[1], 'base64');
    const plainAuth = buf.toString();
    const creds = plainAuth.split(':');
    const username = creds[0];
    const password = creds[1];
    if (username === 'Basic' && password === 'Vml0YWxpaTpUZXN0MTIzNDU=') {
      login = true;
      // console.log('LOGIN SUCCESS');
    }
  }

  if (!login) {
    // console.log('LOGIN FAILED');
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    if (!auth) res.end(JSON.stringify({ message: 'Unauthorized' }));
    else res.end(JSON.stringify({ message: 'Unauthorized WRONG LOGIN OR PASSWORD' }));
  }

  return login;
}

module.exports = authorization;
