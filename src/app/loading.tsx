export default function Loading() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--cream)",
        gap: "20px",
      }}
    >
      {/* Spinning mandala loader */}
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "3px solid rgba(200,75,31,0.15)",
          borderTopColor: "var(--saffron)",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <p
        className="font-deva"
        style={{
          color: "var(--saffron)",
          fontSize: "14px",
          letterSpacing: "3px",
          opacity: 0.7,
        }}
      >
        लोड हो रहा है...
      </p>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}