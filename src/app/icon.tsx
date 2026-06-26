import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          color: "#d6ff4b",
          fontSize: 22,
          fontStyle: "italic",
          fontWeight: 600,
          fontFamily: "Georgia, serif",
          borderRadius: 7,
        }}
      >
        h
      </div>
    ),
    { ...size }
  );
}
