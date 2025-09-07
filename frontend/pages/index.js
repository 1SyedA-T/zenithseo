export default function Home() {
  async function submitWaitlist(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const btn = document.getElementById('join-btn');
    btn.disabled = true;
    btn.innerText = 'Joining...';

    try {
      const res = await fetch('/api/waitlist-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });
      const j = await res.json();
      if (res.ok) {
        alert('Thank you — you are on the waitlist!');
        e.target.reset();
      } else {
        alert('Error: ' + (j.detail || 'Unable to join'));
      }
    } catch (err) {
      alert('Network error. Try again.');
    } finally {
      btn.disabled = false;
      btn.innerText = 'Join Waitlist';
    }
  }

  return (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#0A1633' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 20, padding: 24 }}>
        <img src="/images/zenithseo-logo.svg" alt="ZenithSEO" style={{ height: 72 }}/>
        <div>
          <h1 style={{ margin: 0, fontSize: 22 }}>ZenithSEO</h1>
          <div style={{ color: '#6b7280' }}>Reach Your Zenith in SEO</div>
        </div>
      </header>

      <main style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h2 style={{ fontSize: 36, marginBottom: 8 }}>AI + SEMrush-powered SEO for top rankings</h2>
        <p style={{ color: '#374151', maxWidth: 820, margin: '0 auto 30px' }}>
          ZenithSEO uses market intelligence and AI to create weekly plans, keyword clusters, and prioritized technical fixes — all automated.
        </p>

        <div style={{ maxWidth: 720, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div style={{ padding: 20, borderRadius: 12, border: '1px solid #e5e7eb', textAlign: 'left' }}>
            <h3 style={{ marginTop: 0 }}>What you get</h3>
            <ul style={{ paddingLeft: 18, color: '#374151' }}>
              <li>Keyword galaxy & content calendar</li>
              <li>Auto site audits & prioritized fixes</li>
              <li>Rank pulse & competitor insights</li>
            </ul>
          </div>
          <div style={{ padding: 20, borderRadius: 12, border: '1px solid #e5e7eb' }}>
            <h3 style={{ marginTop: 0 }}>Join our waitlist</h3>
            <form onSubmit={submitWaitlist}>
              <input name="name" placeholder="Your name" required style={{ width: '100%', padding: 10, marginBottom: 8, borderRadius: 6, border: '1px solid #d1d5db' }} />
              <input name="email" type="email" placeholder="Email address" required style={{ width: '100%', padding: 10, marginBottom: 8, borderRadius: 6, border: '1px solid #d1d5db' }} />
              <button id="join-btn" type="submit" style={{ width: '100%', padding: 12, borderRadius: 8, background: '#0B63FF', color: 'white', border: 'none' }}>Join Waitlist</button>
            </form>
          </div>
        </div>

        <footer style={{ marginTop: 40, color: '#9CA3AF' }}>
          <small>Built by ZenithSEO — AI + SEMrush · &copy; 2025</small>
        </footer>
      </main>
    </div>
  );
}
