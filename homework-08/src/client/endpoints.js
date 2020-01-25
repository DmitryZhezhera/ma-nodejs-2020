const username = 'Basic';
const password = 'Vml0YWxpaTpUZXN0MTIzNDU=';
const authHeader = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;

const endpoints = [
  {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET',
    auth: authHeader,
    postData: '',
  },
  {
    hostname: 'localhost',
    port: 3000,
    path: '/metrics',
    method: 'GET',
    auth: authHeader,
    postData: '',
  },
  {
    hostname: 'localhost',
    port: 3000,
    path: '/metrics?filter=total',
    method: 'GET',
    auth: authHeader,
    postData: '',
  },
  {
    hostname: 'localhost',
    port: 3000,
    path: '/metrics?filter=free',
    method: 'GET',
    auth: authHeader,
    postData: '',
  },
  {
    hostname: 'localhost',
    port: 3000,
    path: '/metrics?filter=allocated',
    method: 'GET',
    auth: authHeader,
    postData: '',
  },
  {
    hostname: 'localhost',
    port: 3000,
    path: '/metrics?filter=limit',
    method: 'GET',
    auth: authHeader,
    postData: '',
  },
  {
    hostname: 'localhost',
    port: 3000,
    path: '/limit',
    method: 'POST',
    auth: authHeader,
    postData: { limit: 1000 },
  },
];

module.exports = endpoints;
