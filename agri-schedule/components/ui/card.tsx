import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";


export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-foreground/10 shadow-lg bg-white/70 dark:bg-black/30 backdrop-blur",
                className
            )}
            {...props}
        />
    );
}


export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("p-6 sm:p-8 pb-0", className)} {...props} />;
}


export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("p-6 sm:p-8", className)} {...props} />;
}


export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("p-6 sm:p-8 pt-0", className)} {...props} />;
}