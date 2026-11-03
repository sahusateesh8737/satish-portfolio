import { ImageResponse } from "next/og";
export const alt = "Satish Sahu — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#ffffff",
        color: "#000000",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "64px 80px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
        }}
      >
        <span>satish ↗</span>
        <span>FULL-STACK DEVELOPER</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: "-4px",
          lineHeight: 1.1,
        }}
      >
        <span>SATISH SAHU.</span>
        <span style={{ color: "#000000" }}>FULL-STACK DEVELOPER.</span>
      </div>
      <div style={{ display: "flex", fontSize: 24 }}>
        React · Next.js · Node.js · Django
      </div>
    </div>,
    size,
  );
}
