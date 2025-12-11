"use client";

type TagProps = {
  text: string;
  icon?: string; // Emoji o carácter opcional
};

export default function Tag({ text, icon }: TagProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/40 backdrop-blur px-4 py-2 shadow-sm">
      
      {!icon && (
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
      )}

      {icon && <span className="text-[14px]">{icon}</span>}

      <span className="text-slate-700 font-medium">{text}</span>
    </div>
  );
}
