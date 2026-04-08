export default function Footer() {
  return (
    <footer style={{ background: "#070710", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "5rem 5% 2.5rem", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.3fr", gap: "3rem", marginBottom: "3.5rem" }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.8rem", fontWeight: 800, letterSpacing: -1 }}>
          <span style={{ color: "#ff6b1a" }}>UANDWE</span>
          </div>
          <p style={{ color: "#8a8a9a", fontSize: "0.875rem", lineHeight: 1.7, margin: "1rem 0 1.5rem", maxWidth: 280 }}>
            Engineering the future through precision, intelligence, and relentless innovation. Trusted by global technology leaders.
          </p>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {["in", "𝕏", "⌥", "▶"].map(icon => (
              <a key={icon} href="#" style={{ width: 38, height: 38, border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "#8a8a9a", textDecoration: "none", fontSize: "0.85rem", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#ff6b1a"; e.currentTarget.style.color = "#ff6b1a"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#8a8a9a"; }}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#fff", marginBottom: "1.25rem" }}>Company</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["About Us", "Innovation", "Careers", "Newsroom", "Investors"].map(l => (
              <li key={l} style={{ marginBottom: "0.6rem" }}>
                <a href="#" style={{ color: "#8a8a9a", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#ff6b1a"}
                  onMouseLeave={e => e.currentTarget.style.color = "#8a8a9a"}>{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#fff", marginBottom: "1.25rem" }}>Services</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Semiconductor Eng.", "Embedded Systems", "Automotive", "AI & Software", "Consulting"].map(l => (
              <li key={l} style={{ marginBottom: "0.6rem" }}>
                <a href="#" style={{ color: "#8a8a9a", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#ff6b1a"}
                  onMouseLeave={e => e.currentTarget.style.color = "#8a8a9a"}>{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#fff", marginBottom: "1.25rem" }}>Contact</h4>
          {[["Headquarters", "Bengaluru, Karnataka, India 560001"], ["Email", "hello@uandwe.com"], ["Phone", "+91 80 4200 0000"], ["Global Offices", "US · UK · Germany · Japan"]].map(([label, val]) => (
            <p key={label} style={{ fontSize: "0.875rem", color: "#8a8a9a", lineHeight: 1.7, marginBottom: "0.75rem" }}>
              <strong style={{ color: "#fff", display: "block", marginBottom: "0.2rem", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</strong>
              {val}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ fontSize: "0.8rem", color: "#8a8a9a", margin: 0 }}>© 2025 UANDWE Technologies Pvt. Ltd. All rights reserved.</p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Privacy Policy", "Terms of Use", "Cookies"].map(l => (
            <a key={l} href="#" style={{ fontSize: "0.8rem", color: "#8a8a9a", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = "#ff6b1a"}
              onMouseLeave={e => e.currentTarget.style.color = "#8a8a9a"}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}   