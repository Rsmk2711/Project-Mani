type Props = {
  role: "user" | "mani";
  text: string;
  intent?: string;
  model?: string;
};

export default function ChatMessage({ role, text, intent, model }: Props) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-zinc-800 text-zinc-100 rounded-bl-none"
        }`}
      >
        <p className="whitespace-pre-wrap">{text}</p>
        {!isUser && intent && model && (
          <p className="mt-2 text-xs text-zinc-500">
            Intent: <span className="text-blue-400">{intent}</span> · Model: {" "}
            <span className="text-blue-400">{model.split("/")[1]}</span>
          </p>
        )}
      </div>
    </div>
  );
}
