const actionHandler = require('../../api/action');

exports.handler = async (event, context) => {
  return new Promise((resolve) => {
    const req = {
      method: event.httpMethod,
      headers: event.headers,
      body: event.body
    };

    const res = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      setHeader(k, v) { this.headers[k] = v; },
      status(code) { this.statusCode = code; return this; },
      json(data) {
        resolve({
          statusCode: this.statusCode,
          headers: this.headers,
          body: JSON.stringify(data)
        });
      },
      writeHead(code, headers) {
        this.statusCode = code;
        if (headers) Object.assign(this.headers, headers);
      },
      end(payload) {
        resolve({
          statusCode: this.statusCode,
          headers: this.headers,
          body: payload || ''
        });
      }
    };

    actionHandler(req, res);
  });
};
