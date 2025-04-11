"use client";

import Image from "next/image";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { cn } from "@/lib/utils";

interface OptimizedAvatarProps {
  src: string;
  alt: string;
  initials: string;
  className?: string;
}

export function OptimizedAvatar({ src, alt, initials, className }: OptimizedAvatarProps) {
  return (
    <Avatar className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100px, 200px"
          className="object-cover object-center"
          quality={100}
          unoptimized={true} // Use the original image without optimization
        />
      </div>
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
