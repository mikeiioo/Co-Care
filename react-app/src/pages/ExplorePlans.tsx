import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  provider: string;
  monthlyPremium: number;
  deductible: number;
  coverage: string[];
  rating: number;
}

const samplePlans: Plan[] = [
  {
    id: '1',
    name: 'Essential Care Plus',
    provider: 'BlueCross',
    monthlyPremium: 299,
    deductible: 2500,
    coverage: ['Primary Care', 'Specialists', 'Emergency Care', 'Prescriptions'],
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Premium Health Select',
    provider: 'Aetna',
    monthlyPremium: 399,
    deductible: 1500,
    coverage: ['Primary Care', 'Specialists', 'Emergency Care', 'Prescriptions', 'Dental', 'Vision'],
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Basic Coverage',
    provider: 'UnitedHealth',
    monthlyPremium: 199,
    deductible: 3500,
    coverage: ['Primary Care', 'Emergency Care', 'Prescriptions'],
    rating: 4.0,
  },
];

function ExplorePlans() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const filteredPlans = samplePlans.filter(plan => 
    plan.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    plan.monthlyPremium >= priceRange[0] &&
    plan.monthlyPremium <= priceRange[1]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Available Insurance Plans</h2>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search plans..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPlans.map(plan => (
          <div key={plan.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.provider}</p>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900">{plan.rating}</span>
                <span className="ml-1 text-yellow-400">★</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold text-gray-900">${plan.monthlyPremium}</p>
                <p className="text-sm text-gray-500">per month</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700">Deductible</p>
                <p className="text-lg font-semibold text-gray-900">${plan.deductible}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Coverage</p>
                <div className="flex flex-wrap gap-2">
                  {plan.coverage.map(item => (
                    <span
                      key={item}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorePlans;