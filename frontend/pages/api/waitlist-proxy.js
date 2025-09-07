export default async function handler(req, res) {
  // Proxy request to backend /waitlist
  const backend = process.env.BACKEND_URL || "http://localhost:8000";
  try {
    const apiRes = await fetch(`${backend}/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await apiRes.json();
    res.status(apiRes.status).json(data);
  } catch (err) {
    res.status(500).json({ detail: 'Backend proxy failed' });
  }
}
