import React from "react";

interface IconProps {
  size?: number;
  strokeWidth?: number;
}

interface ExploreCardProps {
  icon: React.ReactElement<IconProps>;
  title: string;
  href: string;
}

export function ExploreCard({ icon, title, href }: ExploreCardProps) {
  return (
    <a 
      href={href}
      className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex items-center gap-6 border border-white/10"
    >
      <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-white group-hover:bg-[#993333]/5 transition-colors">
        <div className="w-full h-full p-3 text-[#993333] group-hover:scale-110 transition-transform duration-300">
          {React.cloneElement(icon as React.ReactElement, {
            size: 48,
            strokeWidth: 1.5
          })}
        </div>
      </div>
      <h3 className="flex-1 text-base font-medium text-gray-800 group-hover:text-[#993333] transition-colors">
        {title}
      </h3>
    </a>
  )
}
