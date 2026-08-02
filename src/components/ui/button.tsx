import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-[#1a120a] hover:bg-accent-soft shadow-[0_0_0_1px_rgb(225_179_76_/_0.35)]",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-accent-soft/50 hover:bg-surface-elevated/60",
  ghost: "bg-transparent text-muted hover:text-foreground",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold tracking-tight transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
