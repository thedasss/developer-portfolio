import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#0a0a0f",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#00d4ff",
          fontWeight: 800,
          borderRadius: "8px",
          border: "1.5px solid #00d4ff",
          fontFamily: "monospace",
        }}
      >
        TS
      </div>
    ),
    {
      ...size,
    }
  );
}

