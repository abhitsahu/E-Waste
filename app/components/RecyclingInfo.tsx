import { Check, X } from 'lucide-react'

export default function RecyclingInfo() {
  const recyclableItems = [
    'Paper and cardboard',
    'Glass bottles and jars',
    'Plastic bottles and containers',
    'Metal cans and tins',
    'Aluminum foil and trays'
  ]

  const nonRecyclableItems = [
    'Food waste',
    'Plastic bags and wraps',
    'Styrofoam',
    'Electronics',
    'Hazardous waste'
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Recycling Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recyclable Items</h2>
          <ul className="space-y-2">
            {recyclableItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <Check className="text-green-600 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Non-Recyclable Items</h2>
          <ul className="space-y-2">
            {nonRecyclableItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <X className="text-red-600 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recycling Tips</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Rinse containers before recycling</li>
          <li>Remove caps and lids from bottles and jars</li>
          <li>Flatten cardboard boxes</li>
          <li>Don't bag recyclables - keep them loose in the bin</li>
          <li>Check with your local recycling center for specific guidelines</li>
        </ul>
      </div>
    </div>
  )
}

