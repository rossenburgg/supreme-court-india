import { SupremeCourtHeader } from '@/components/ui/supreme-court-header'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white">
      <SupremeCourtHeader />
      {children}
    </div>
  )
}
