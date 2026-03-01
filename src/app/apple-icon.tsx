import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <svg
          width="160"
          height="160"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="15"
            y="15"
            width="70"
            height="70"
            rx="12"
            ry="12"
            fill="#007060"
            stroke="#EAF6F4"
            strokeWidth="6"
          />
          <line
            x1="50"
            y1="30"
            x2="50"
            y2="70"
            stroke="#EAF6F4"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
