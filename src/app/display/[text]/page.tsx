import { useParams } from "next/navigation";

export default function DisplayPage() {
  const params = useParams();
  let text = "Matn topilmadi.";

  if (params?.text) {
    if (Array.isArray(params.text)) {
      text = decodeURIComponent(params.text[0]);
    } else {
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
        padding: "20px",
      }}
    >
      {text}
    </div>
  );
}
