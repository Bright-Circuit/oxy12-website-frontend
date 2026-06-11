import Link from "next/link";
import logoUrl from "@/assets/oxy12-logo.png";

export function Logo({ className = "" }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="OXY12 home">
      <img src={logoUrl.src} alt="OXY12" className="h-8 w-auto select-none md:h-9" draggable={false} />
    </Link>
  );
}
