import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
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
          background: "#080811",
          borderRadius: "7px",
          border: "1.5px solid #00d4ff",
          position: "relative",
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="50,10 88,31 88,69 50,90 12,69 12,31"
            stroke="#a855f7"
            strokeWidth="7"
            fill="#0f0f1a"
          />
          <path
            d="M 36 36 L 24 50 L 36 64"
            stroke="#00d4ff"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="50" r="5" fill="#ffffff" />
          <path
            d="M 64 36 L 76 50 L 64 64"
            stroke="#ec4899"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
