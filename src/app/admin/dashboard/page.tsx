export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Cases</h3>
          <p className="text-3xl font-semibold mt-2">45,289</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Pending Cases</h3>
          <p className="text-3xl font-semibold mt-2">12,456</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Disposed Cases</h3>
          <p className="text-3xl font-semibold mt-2">32,833</p>
        </div>
      </div>
    </div>
  )
}
