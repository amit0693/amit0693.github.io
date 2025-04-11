"use client";

import { IconCloud } from "@/registry/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "mysql", // SQL
  "python",
  "html5",
  "css3",
  "react",
  "angular",
  "vuedotjs", // Vue.js
  "nodedotjs", // Node.js
  "nestjs",
  "express",
  "graphql",
  "postgresql",
  "mongodb",
  "docker",
  "kubernetes",
  "amazonaws", // AWS
  "googlecloud", // GCP
  "microsoftazure", // Azure
  "git",
  "github",
  "visualstudiocode",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud
        images={images}
        radius={200}
        imageSize={40}
        count={40}
        depth={20}
        rotationSpeed={0.002}
      />
    </div>
  );
}
