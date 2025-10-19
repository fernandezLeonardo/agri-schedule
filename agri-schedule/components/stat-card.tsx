export function StatCard({ label, value, hint }: { label: string; value: string; hint?: string }) {
return (
<div className="rounded-2xl border border-foreground/10 p-4">
<div className="text-sm text-foreground/60">{label}</div>
<div className="text-3xl font-semibold mt-1">{value}</div>
{hint && <div className="text-xs text-foreground/60 mt-1">{hint}</div>}
</div>
);
}