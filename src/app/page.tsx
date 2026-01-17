"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react"; // <- Shu to‘g‘ri

export default function HomePage() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const generateQR = () => {
    if (!text.trim()) {
      alert("Iltimos, matn kiriting!");
      return;
    }

    setQrUrl(`/display/${encodeURIComponent(text)}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px", fontFamily: "Arial" }}>
      <h2>Matn uchun QR yaratish</h2>
      <input
        type="text"
        placeholder="Masalan: Salom"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", fontSize: "16px", width: "200px" }}
      />
      <button
        onClick={generateQR}
        style={{ padding: "8px 12px", marginLeft: "10px", fontSize: "16px" }}
      >
        QR yaratish
      </button>

      {qrUrl && (
        <div style={{ marginTop: "20px" }}>
          <QRCodeSVG value={qrUrl} width={200} height={200} />
          <p>
            <a href={qrUrl} target="_blank" rel="noopener noreferrer">
              {qrUrl}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
