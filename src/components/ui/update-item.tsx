interface UpdateItemProps {
  label: string;
  content: React.ReactNode;
  date: string;
  hideBadge?: boolean;
}

export function UpdateItem({ label, content, date, hideBadge }: UpdateItemProps) {
  return (
    <div className="flex items-start gap-4 py-3 border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
      {!hideBadge && (
        <span className="px-3 py-1 text-xs bg-orange-100 text-orange-700 rounded-full font-medium whitespace-nowrap">
          {label}
        </span>
      )}
      <div className="flex-1 text-sm text-gray-900">
        {content}
      </div>
      <span className="text-xs text-gray-500 whitespace-nowrap">{date}</span>
    </div>
  )
}
