const quickLinks = [
  { label: "What is RSMK Technologies?", icon: "🏢" },
  { label: "Tell me about BudgetBuddy", icon: "💰" },
  { label: "What is SFMD?", icon: "🔥" },
  { label: "Show me all projects", icon: "🚀" },
  { label: "Who built Mani?", icon: "🧠" },
  { label: "What is ColorOhm?", icon: "🔌" },
];

type Props = {
  onSelect: (query: string) => void;
};

export default function QuickLinks({ onSelect }: Props) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <p className="text-center text-zinc-500 text-sm mb-4">
        Quick questions to get started
      </p>
      <div className="grid grid-cols-2 gap-2">
        {quickLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => onSelect(link.label)}
            className="glass rounded-xl px-4 py-3 text-left text-sm text-zinc-300 hover:text-white hover:border-purple-500/40 transition-all duration-200 flex items-center gap-2 group"
          >
            <span className="text-base">{link.icon}</span>
            <span className="group-hover:text-white transition-colors">
              {link.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
