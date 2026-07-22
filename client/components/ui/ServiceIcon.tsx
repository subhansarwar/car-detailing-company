import {
  Building2,
  Car,
  Droplets,
  Fence,
  Gauge,
  Home,
  Sparkles,
  Waves,
  Wind,
  type LucideProps,
} from "lucide-react";
import type { Service } from "@/lib/site";

const iconMap: Record<Service["icon"], React.ComponentType<LucideProps>> = {
  house: Home,
  car: Car,
  road: Waves,
  fence: Fence,
  building: Building2,
  sparkles: Sparkles,
  droplets: Droplets,
  gauge: Gauge,
  wind: Wind,
};

export default function ServiceIcon({
  icon,
  ...props
}: { icon: Service["icon"] } & LucideProps) {
  const Icon = iconMap[icon] ?? Sparkles;
  return <Icon {...props} />;
}
