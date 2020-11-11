const proxy = [
  {
    context: '/api',
    target: 'localhost:8090'
  }
];

module.exports = proxy;
