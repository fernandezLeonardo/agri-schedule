export type EventItem = {
id: string;
title: string;
date: string; // YYYY-MM-DD for demo
time: string; // HH:MM
location: string;
hours?: number;
completed?: boolean;
};


export function EventList({
items,
ctaLabel = "View",
onCtaClick,
empty = "No items.",
}: {
items: EventItem[];
ctaLabel?: string;
onCtaClick?: (id: string) => void;
empty?: string;
}) {
if (!items?.length) return <div className="text-sm text-foreground/60 border border-dashed rounded-xl p-4">{empty}</div>;
return (
<ul className="space-y-3">
{items.map((e) => (
<li key={e.id} className="rounded-xl border border-foreground/10 p-3 flex items-center justify-between">
<div>
<div className="font-medium">{e.title}</div>
<div className="text-xs text-foreground/60">{e.date} · {e.time} · {e.location}</div>
</div>
{onCtaClick && (
<button
className="text-sm underline"
onClick={() => onCtaClick(e.id)}
>
{ctaLabel}
</button>
)}
</li>
))}
</ul>
);
}