import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(60% 60% at 30% 0%, rgba(214,255,75,0.14) 0%, rgba(10,10,11,0) 70%)",
          padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#a7a39a",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 999,
                background: "#d6ff4b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0a0a0b",
                fontStyle: "italic",
                fontSize: 26,
              }}
            >
              hk
            </div>
            Portfolio
          </div>
          <div
            style={{
              color: "#6e6b64",
              fontSize: 22,
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: 3,
            }}
          >
            {profile.location}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 96,
              color: "#f3f0e9",
              lineHeight: 1.04,
              letterSpacing: -3,
            }}
          >
            <span>I build complete products —</span>
            <span style={{ fontStyle: "italic", color: "#d6ff4b" }}>
              not just code.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #26262c",
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 40, color: "#f3f0e9" }}>{profile.name}</div>
          <div
            style={{
              fontSize: 26,
              color: "#a7a39a",
              fontFamily: "monospace",
            }}
          >
            {profile.role}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
