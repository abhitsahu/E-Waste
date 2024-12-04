import Link from 'next/link'
import { Calendar, Recycle, Info } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to EcoWaste Management System</h1>
      <p className="text-xl mb-8">Helping you manage waste efficiently and sustainably.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/schedule" className="bg-green-100 p-6 rounded-lg hover:bg-green-200 transition duration-300">
          <Calendar className="mx-auto mb-4 text-green-600" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Collection Schedule</h2>
          <p>View and manage your waste collection schedule.</p>
        </Link>
        <Link href="/recycling" className="bg-green-100 p-6 rounded-lg hover:bg-green-200 transition duration-300">
          <Recycle className="mx-auto mb-4 text-green-600" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Recycling Information</h2>
          <p>Learn about proper recycling practices and guidelines.</p>
        </Link>
        <div className="bg-green-100 p-6 rounded-lg">
          <Info className="mx-auto mb-4 text-green-600" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Waste Reduction Tips</h2>
          <p>Discover ways to reduce waste and live more sustainably.</p>
        </div>
      </div>
    </div>
  )
}

