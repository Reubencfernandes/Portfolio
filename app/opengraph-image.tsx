import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Reuben Chagas Fernandes — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, #FFE0D0 0%, #F15A24 55%, #C42D0B 100%)",
          padding: "80px",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            color: "#1A0F08",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Hi, I&apos;m Reuben — Full-Stack Developer
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: 0.88,
          }}
        >
          <div
            style={{
              fontSize: 170,
              color: "#FFE0D0",
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            Reuben
          </div>
          <div
            style={{
              fontSize: 170,
              color: "#FFE0D0",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            Fernandes
            <span style={{ color: "#FF8C4C" }}>.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#1A0F08",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>Based in Goa, India</div>
          <div style={{ display: "flex" }}>reuben-fernandes.xyz</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
