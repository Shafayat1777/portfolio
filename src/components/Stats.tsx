import cn from "@/utils/cn";

export default function Stats({ className }: { className?: string }) {
  return <div className={cn("border col-span-2", className)}>Stats</div>;
}
