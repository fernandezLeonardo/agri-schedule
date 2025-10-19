"use client";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";


type Variant = "primary" | "outline" | "ghost";


type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
};


const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed";


const variants: Record<Variant, string> = {
    primary:
        "bg-[#2E7D32] text-white shadow-sm hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]/30",
    outline:
        "border border-foreground/15 bg-background hover:bg-foreground/5",
    ghost:
        "hover:bg-foreground/5",
};


export const Button = forwardRef<HTMLButtonElement, Props>(
    ({ className, variant = "primary", ...props }, ref) => (
        <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
    )
);
Button.displayName = "Button";