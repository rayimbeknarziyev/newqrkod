type Props = {
  params: {
    text: string;
  };
};

export default function DisplayPage({ params }: Props) {
  const text = decodeURIComponent(params.text);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 32,
        fontFamily: "Arial",
        background: "#f5f5f5",
        textAlign: "center",
        padding: 20,
      }}
    >
      {text}
    </div>
  );
}
