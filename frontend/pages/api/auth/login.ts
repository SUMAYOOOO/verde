import axios from 'axios';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const r = await axios.post(process.env.BACKEND_URL + '/api/auth/login', req.body);
      res.status(r.status).json(r.data);
    } catch (e) {
      res.status(500).json({ error: 'backend error' });
    }
  } else res.status(405).end();
}
