export default function Home() {
  return (
    <main style={{
      backgroundColor: "#050505",
      color: "#e5e7eb",
      minHeight: "100vh",
      padding: "24px",
      fontFamily: "Arial, sans-serif"
    }}>
      
      <h1 style={{
        color: "#22c55e",
        fontSize: "36px",
        fontWeight: "bold"
      }}>
        NUTIVO
      </h1>

      <p style={{
        marginTop: "10px",
        color: "#9ca3af"
      }}>
        Your AI Fitness & Nutrition Coach
      </p>

      <div style={{
        marginTop: "40px",
        background: "#0f172a",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #22c55e"
      }}>
        <h2 style={{ color: "#22c55e" }}>
          Start Your Journey
        </h2>

        <p style={{ marginTop: "10px", color: "#9ca3af" }}>
          Personalized meals. Smarter nutrition. Real results.
        </p>

        <button style={{
          marginTop: "20px",
          background: "#22c55e",
          color: "black",
          padding: "12px 20px",
          borderRadius: "8px",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Get Started
        </button>
      </div>

    </main>
  );
}
