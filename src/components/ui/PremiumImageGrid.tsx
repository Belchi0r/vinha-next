"use client";

import { MotionCard } from "@/src/components/motion/MotionCard";
import { ImageFrame } from "./ImageFrame";

type PremiumImageGridItem = {
  title: string;
  imageSrc?: string | null;
  alt?: string;
};

type PremiumImageGridProps = {
  items: PremiumImageGridItem[];
};

export function PremiumImageGrid({ items }: PremiumImageGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <MotionCard key={item.title} index={index} hover={false}>
          <ImageFrame
            imageSrc={item.imageSrc}
            alt={item.alt ?? item.title}
            label={item.title}
            variant={index % 2 === 0 ? "burgundy" : "dark"}
            className="aspect-[4/3]"
          />
        </MotionCard>
      ))}
    </div>
  );
}
