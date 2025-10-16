export function cn(...classes: Array<string | false | null | undefined>) {
return classes.filter(Boolean).join(" ");
}


export const brand = {
forest: "#2E7D32",
sage: "#8BC34A",
sun: "#F4A261",
};