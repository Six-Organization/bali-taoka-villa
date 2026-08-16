import {
  Waves,
  Wifi,
  Snowflake,
  CookingPot,
  Car,
  Plane,
  Tv,
  Refrigerator,
  Microwave,
  Bath,
  Cigarette,
  ShieldCheck,
  Leaf,
  MapPin,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Waves,
  Wifi,
  Snowflake,
  CookingPot,
  Car,
  Plane,
  Tv,
  Refrigerator,
  Microwave,
  Bath,
  Cigarette,
  ShieldCheck,
  Leaf,
  MapPin,
  Sparkles,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = MAP[name] ?? Sparkles;
  return <Cmp className={className} />;
}
