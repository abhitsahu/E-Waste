'use client'

import { useState } from 'react'
import { Calendar } from 'lucide-react'

export default function WasteCollectionSchedule() {
  const [selectedDate, setSelectedDate] = useState('')

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Waste Collection Schedule</h1>
      <div className="bg-green-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Schedule a Collection</h2>
        <div className="flex items-center space-x-4">
          <Calendar className="text-green-600" size={24} />
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
            Schedule
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Collections</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-lg shadow">
            <div className="font-semibold">General Waste</div>
            <div className="text-gray-600">Every Monday</div>
          </li>
          <li className="bg-white p-4 rounded-lg shadow">
            <div className="font-semibold">Recyclables</div>
            <div className="text-gray-600">Every Wednesday</div>
          </li>
          <li className="bg-white p-4 rounded-lg shadow">
            <div className="font-semibold">Green Waste</div>
            <div className="text-gray-600">First Friday of each month</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

