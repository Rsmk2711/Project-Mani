import Image from "next/image";

export default function ManiHeader() {
  return (
    <div className="w-full bg-background/60 backdrop-blur-3xl border-b border-white/[0.03] sticky top-0 z-50">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0050ff] to-[#38c8f1] flex items-center justify-center shadow-[0_0_20px_rgba(56,200,241,0.2)] border border-white/10 overflow-hidden">
            <Image src="/rsmk.svg" alt="RSMK Logo" width={38} height={38} className="object-contain brightness-0 invert" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#f8f8f8] font-semibold text-base leading-tight tracking-tight">Mani</h1>
            <p className="text-[#a1a1aa] text-xs mt-0.5 tracking-wide">RSMK Technologies</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-[#38c8f1]/20 shadow-[0_0_10px_rgba(56,200,241,0.05)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38c8f1] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38c8f1]"></span>
          </span>
          <span className="text-[#38c8f1] text-[11px] font-medium tracking-widest uppercase">Online</span>
        </div>
      </div>
    </div>
  );
}
