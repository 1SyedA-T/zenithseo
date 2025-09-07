export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '50px'
    }}>
      <img 
        src="/images/zenithseo-logo.svg" 
        alt="ZenithSEO Logo" 
        style={{ width: '200px', marginBottom: '20px' }} 
      />
      <h1 style={{ fontSize: '3rem', color: '#0B63FF' }}>
        ZenithSEO
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#333' }}>
        Reach the top of search results with AI-powered SEO tools 🚀
      </p>
      <a 
        href="https://forms.gle/example" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '30px',
          padding: '15px 30px',
          fontSize: '1.2rem',
          backgroundColor: '#00C853',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none'
        }}
      >
        Join Waitlist
      </a>
    </div>
  )
}
