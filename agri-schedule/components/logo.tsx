export function Logo({ withText = true }: { withText?: boolean }) {
    return (
        <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white/90 ring-1 ring-black/5 grid place-items-center shadow-sm">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                    <path
                        d="M12 21c-1.2-4.6 1.8-8.3 1.8-8.3S17.5 9.7 21 9c-1.2 3.5-3.7 5.8-6.8 6.8m-4.2 5.2C6.2 16.4 8.2 12.7 8.2 12.7S6.5 8.8 3 7.5c.9 3.3 3 5.5 6 6.7"
                        fill="none"
                        stroke="#2E7D32"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            {withText && (
                <div>
                    <p className="text-white/80 text-xs tracking-wide uppercase">Porters Community Farm</p>
                    <h1 className="text-white text-2xl font-medium tracking-tight">AgriSchedule</h1>
                </div>
            )}
        </div>
    );
}