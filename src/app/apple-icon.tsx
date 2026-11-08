import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
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
          borderRadius: "36px",
          border: "4px solid #00d4ff",
          position: "relative",
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="50,10 88,31 88,69 50,90 12,69 12,31"
            stroke="#a855f7"
            strokeWidth="5"
            fill="#0f0f1a"
          />
          <path
            d="M 34 38 L 22 50 L 34 62"
            stroke="#00d4ff"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="50" r="4" fill="#ffffff" />
          <path
            d="M 66 38 L 78 50 L 66 62"
            stroke="#ec4899"
            strokeWidth="6"
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
