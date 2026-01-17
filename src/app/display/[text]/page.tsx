import { useParams } from "next/navigation";

export default function DisplayPage() {
  const params = useParams();

  // params.text ni tekshirib, faqat string bo‘lsa decode qilamiz
  let text = "Matn topilmadi.";
  if (params?.text) {
    if (Array.isArray(params.text)) {
      // Agar array bo‘lsa, birinchi elementni olamiz
      text = decodeURIComponent(params.text[0]);
    } else {
      // Agar string bo‘lsa, to‘g‘ridan-to‘g‘ri decode qilamiz
      text = decodeURIComponent(params.text);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "28px",
        fontFamily: "Arial",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      {text}
    </div>
  );
}
