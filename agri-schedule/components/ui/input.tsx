import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";


type Props = InputHTMLAttributes<HTMLInputElement> & {};


export const Input = forwardRef<HTMLInputElement, Props>(
({ className, ...props }, ref) => (
<input
ref={ref}
className={cn(
"w-full rounded-xl border border-foreground/20 bg-transparent px-4 py-2.5 outline-none ring-0 focus:border-[#2E7D32]",
className
)}
{...props}
/>
)
);
Input.displayName = "Input";