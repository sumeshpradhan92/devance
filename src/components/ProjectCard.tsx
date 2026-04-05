interface ProjectCardProps {
  title: string;
  category: string;
  tags: string[];
  description: string;
  color: string;
  bg: string;
  year: string;
  outcome: string;
  href?: string;
}

export default function ProjectCard({
  title,
  category,
  tags,
  description,
  color,
  bg,
  year,
  outcome,
  href = "#",
}: ProjectCardProps) {
  return (
    <article className="card" style={{ overflow: "hidden" }}>
      {/* Visual */}
      <div
        style={{
          height: "220px",
          background: bg,
          borderBottom: `3px solid ${color}22`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "16px", left: "16px", fontSize: "12px", color, fontWeight: 600, letterSpacing: "1px" }}>
          {year}
        </div>
        <div
          style={{
            position: "absolute", top: "16px", right: "16px",
            background: color, color: "white",
            padding: "4px 12px", borderRadius: "100px",
            fontSize: "11px", fontWeight: 600, letterSpacing: "0.5px",
          }}
        >
          {category}
        </div>
        <span
          className="font-display"
          style={{ fontSize: "120px", fontWeight: 900, color, opacity: 0.12, userSelect: "none" }}
        >
          {title[0]}
        </span>
        <div
          style={{
            position: "absolute", bottom: "16px", left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(255,255,255,0.92)",
            border: `1px solid ${color}30`,
            borderRadius: "100px", padding: "4px 16px",
            fontSize: "12px", color, fontWeight: 600, whiteSpace: "nowrap",
          }}
        >
          ↑ {outcome}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "28px" }}>
        <h2 className="font-display" style={{ fontSize: "22px", fontWeight: 700, color: "var(--ink)", marginBottom: "10px" }}>
          {title}
        </h2>
        <p style={{ fontSize: "14px", lineHeight: "1.7", color: "var(--ink-light)", marginBottom: "20px" }}>
          {description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "3px 10px",
                background: `${color}12`,
                color,
                borderRadius: "4px",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <a href={href} style={{ fontSize: "13px", fontWeight: 600, color, textDecoration: "none" }}>
          View Case Study →
        </a>
      </div>
    </article>
  );
}