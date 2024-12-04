import Link from 'next/link'
import { Trash2 } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <Trash2 className="mr-2" />
          EcoWaste
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/schedule" className="hover:underline">Collection Schedule</Link>
            </li>
            <li>
              <Link href="/recycling" className="hover:underline">Recycling Info</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

