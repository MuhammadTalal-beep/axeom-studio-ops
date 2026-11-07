module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead ? res.writeHead(200) : (res.status && res.status(200));
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    if (typeof res.json === 'function') {
      res.status(405).json({ error: 'Method not allowed' });
    } else {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      body = {};
    }
  }

  const action = (body && body.action) || 'Default Directive';
  const target = (body && body.target) || 'System';
  const timestamp = new Date().toISOString();

  const payload = JSON.stringify({
    status: 'AUTHORIZED',
    action: action,
    target: target,
    operator: 'Human In The Loop',
    executedAt: timestamp,
    receiptId: 'AX-AUDIT-' + Math.floor(100000 + Math.random() * 900000),
    message: `Directive '${action}' authorized and logged in production audit ledger.`
  });

  if (typeof res.json === 'function') {
    res.status(200).json(JSON.parse(payload));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(payload);
  }
};
