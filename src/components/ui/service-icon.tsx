interface ServiceIconProps {
  icon: React.ReactNode;
  titleHindi: string;
  subtitleHindi: string;
}

export function ServiceIcon({ icon, titleHindi, subtitleHindi }: ServiceIconProps) {
  return (
    <div className="bg-white shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center min-w-[120px] rounded-lg">
      <div className="flex items-center justify-center h-12 mb-3">
        {icon}
      </div>
      <div className="text-center">
        <p className="text-xs text-[#993333] mb-0.5">{titleHindi}</p>
        <p className="text-sm text-[#993333]">{subtitleHindi}</p>
      </div>
    </div>
  )
}
