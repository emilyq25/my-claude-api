export default function handler(req, res) {
  res.status(200).json({ 
    message: 'Basic test works!',
    method: req.method,
    url: req.url
  });
}
