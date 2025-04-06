import React, { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  provider: string;
  monthlyPremium: number;
  deductible: number;
  outOfPocketMax: number;
  coverage: {
    primaryCare: boolean;
    specialists: boolean;
    emergency: boolean;
    prescriptions: boolean;
    dental: boolean;
    vision: boolean;
    mentalHealth: boolean;
  };
}

const samplePlans: Plan[] = [
  {
    id: "1",
    name: "Essential Care Plus",
    provider: "BlueCross",
    monthlyPremium: 299,
    deductible: 2500,
    outOfPocketMax: 8000,
    coverage: {
      primaryCare: true,
      specialists: true,
      emergency: true,
      prescriptions: true,
      dental: false,
      vision: false,
      mentalHealth: true,
    },
  },
  {
    id: "2",
    name: "Premium Health Select",
    provider: "Aetna",
    monthlyPremium: 399,
    deductible: 1500,
    outOfPocketMax: 5000,
    coverage: {
      primaryCare: true,
      specialists: true,
      emergency: true,
      prescriptions: true,
      dental: true,
      vision: true,
      mentalHealth: true,
    },
  },
  {
    id: "3",
    name: "Basic Coverage",
    provider: "UnitedHealth",
    monthlyPremium: 199,
    deductible: 3500,
    outOfPocketMax: 10000,
    coverage: {
      primaryCare: true,
      specialists: false,
      emergency: true,
      prescriptions: true,
      dental: false,
      vision: false,
      mentalHealth: false,
    },
  },
];

function ComparePlans() {
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);

  const handlePlanSelect = (planId: string) => {
    if (selectedPlans.includes(planId)) {
      setSelectedPlans(selectedPlans.filter((id) => id !== planId));
    } else if (selectedPlans.length < 3) {
      setSelectedPlans([...selectedPlans, planId]);
    }
  };

  const plansToCompare = samplePlans.filter((plan) =>
    selectedPlans.includes(plan.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Compare Insurance Plans
      </h2>

      {selectedPlans.length < 3 && (
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Select plans to compare (up to 3)
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {samplePlans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => handlePlanSelect(plan.id)}
                className={`p-4 border rounded-lg text-left transition-colors ${
                  selectedPlans.includes(plan.id)
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <h4 className="font-medium text-gray-900">{plan.name}</h4>
                <p className="text-sm text-gray-500">{plan.provider}</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  ${plan.monthlyPremium}/mo
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {plansToCompare.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Features
                </th>
                {plansToCompare.map((plan) => (
                  <th
                    key={plan.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Monthly Premium
                </td>
                {plansToCompare.map((plan) => (
                  <td
                    key={plan.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    ${plan.monthlyPremium}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Deductible
                </td>
                {plansToCompare.map((plan) => (
                  <td
                    key={plan.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    ${plan.deductible}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Out of Pocket Maximum
                </td>
                {plansToCompare.map((plan) => (
                  <td
                    key={plan.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    ${plan.outOfPocketMax}
                  </td>
                ))}
              </tr>
              {Object.entries(plansToCompare[0].coverage).map(([key, _]) => (
                <tr key={key}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </td>
                  {plansToCompare.map((plan) => (
                    <td
                      key={plan.id}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {plan.coverage[key as keyof typeof plan.coverage] ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* {selectedPlans.length > 1 && (
        <div className="mt-8 flex justify-end">
          <button className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Continue to Enrollment
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      )} */}
    </div>
  );
}

export default ComparePlans;
