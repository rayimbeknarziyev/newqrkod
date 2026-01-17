"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function HomePage() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

  const generateQR = () => {
    if (!text.trim()) {
      alert("Matn kiriting!");
      return;
    }

    setQrUrl(`${BASE_URL}/display/${encodeURIComponent(text)}`);
  };

  return (
    <div style={{ textAlign: "center", padding: 40, fontFamily: "Arial" }}>
      <h2>{process.env.NEXT_PUBLIC_APP_NAME}</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Masalan: Salom"
        style={{ padding: 8, fontSize: 16, width: 220 }}
      />

      <button
        onClick={generateQR}
        style={{ padding: "8px 14px", marginLeft: 10, fontSize: 16 }}
      >
        QR yaratish
      </button>

      {qrUrl && (
        <div style={{ marginTop: 30 }}>
          <QRCodeSVG value={qrUrl} size={220} />
          <p>{qrUrl}</p>
        </div>
      )}
    </div>
  );
}
