type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <p className="text-xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>
    </div>
  );
}
