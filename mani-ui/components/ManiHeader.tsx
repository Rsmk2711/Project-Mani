export default function ManiHeader() {
  return (
    <div className="flex items-center justify-between px-6 py-4 glass border-b border-white/5 relative z-10">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/20">
          M
        </div>
        <div>
          <h1 className="text-white font-semibold text-sm leading-none">Mani</h1>
          <p className="text-zinc-500 text-xs mt-0.5">RSMK Technologies AI</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-zinc-500 text-xs">Online</span>
      </div>
    </div>
  );
}
