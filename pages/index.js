import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Successfully joined the waitlist!");
        setEmail("");
      } else {
        setMessage("❌ " + data.error);
      }
    } catch (err) {
      setMessage("❌ Something went wrong.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginTop: "50px" }}>
      <img src="/zenithseo-logo.svg" alt="ZenithSEO Logo" width="200" />
      <h1>Welcome to Zenith SEO</h1>
      <p>The smart way to grow your online business.</p>

      <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", width: "250px", border: "1px solid #ccc", borderRadius: "5px" }}
        />
        <button type="submit" style={{ marginLeft: "10px", padding: "10px 20px", border: "none", background: "#0B63FF", color: "#fff", borderRadius: "5px" }}>
          Join Waitlist
        </button>
      </form>

      {message && <p style={{ marginTop: "20px", color: "#333" }}>{message}</p>}
    </div>
  );
}
