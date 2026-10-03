import Image from "next/image";
import Link from "next/link";
import logoUrl from "@/assets/oxy12-logo.png";

export function Logo({ className = "", preload = false }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="OXY12 home">
      <Image
        src={logoUrl}
        alt="OXY12"
        sizes="(min-width: 768px) 95px, 84px"
        preload={preload}
        className="h-8 w-auto select-none md:h-9"
        draggable={false}
      />
    </Link>
  );
}
