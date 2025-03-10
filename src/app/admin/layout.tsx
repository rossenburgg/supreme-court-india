import { redirect } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Add authentication check here
  // For now, we'll just allow access
  // const isAuthenticated = checkAuth()
  // if (!isAuthenticated) redirect('/login')

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-screen fixed">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Admin Panel</h2>
          </div>
          <nav className="mt-4">
            <a href="/admin/dashboard" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
              Dashboard
            </a>
            <a href="/admin/judges" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
              Manage Judges
            </a>
            <a href="/admin/news" className="block px-4 py-2 text-gray-600 hover:bg-gray-50">
              News & Updates
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
