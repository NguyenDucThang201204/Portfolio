import { clsx } from "clsx";

interface BadgeProps {
  label: string;
  accent?: "purple" | "cyan" | "default";
  className?: string;
}

export default function Badge({ label, accent = "default", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-mono border transition-all duration-200 cursor-default",
        "bg-surface border-border text-body",
        accent === "purple" && "hover:border-neon-purple hover:text-neon-purple",
        accent === "cyan" && "hover:border-neon-cyan hover:text-neon-cyan",
        accent === "default" && "hover:border-neon-purple hover:text-neon-purple",
        className
      )}
    >
      {label}
    </span>
  );
}
