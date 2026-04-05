interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean; // for dark backgrounds
  labelDeva?: boolean; // use Devanagari script for label
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
  labelDeva = false,
}: SectionHeaderProps) {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: "64px",
      }}
    >
      <p
        className={labelDeva ? "font-deva" : undefined}
        style={{
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "var(--saffron)",
          marginBottom: "12px",
        }}
      >
        {label}
      </p>
      <h2
        className="font-display section-title"
        style={{
          color: light ? "var(--cream)" : "var(--ink)",
          marginBottom: subtitle ? "16px" : "0",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="section-subtitle"
          style={{
            color: light
              ? "rgba(250,246,239,0.65)"
              : "var(--ink-light)",
            margin: align === "center" ? "0 auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}