import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Shield,
  DollarSign,
  Heart,
  Calendar,
  Clock,
  Guitar as Hospital,
} from "lucide-react";

interface Plan {
  id: string;
  name: string;
  provider: string;
  monthlyPremium: number;
  deductible: number;
  coverage: string[];
  rating: number;
  description: string;
  benefits: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
  network: {
    hospitals: number;
    doctors: number;
    pharmacies: number;
  };
  waitingPeriods: {
    service: string;
    period: string;
  }[];
}

const samplePlans: Record<string, Plan> = {
  "1": {
    id: "1",
    name: "Essential Care Plus",
    provider: "BlueCross",
    monthlyPremium: 299,
    deductible: 2500,
    coverage: [
      "Primary Care",
      "Specialists",
      "Emergency Care",
      "Prescriptions",
    ],
    rating: 4.5,
    description:
      "A comprehensive health plan designed for individuals seeking essential coverage with added benefits. This plan offers a balance of affordable monthly premiums and comprehensive coverage.",
    benefits: [
      {
        title: "Preventive Care",
        description: "100% covered with no deductible",
        icon: <Shield className="w-6 h-6 text-blue-500" />,
      },
      {
        title: "Prescription Coverage",
        description: "Generic drugs starting at $10",
        icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      },
      {
        title: "Wellness Programs",
        description: "Access to fitness and wellness resources",
        icon: <Heart className="w-6 h-6 text-blue-500" />,
      },
    ],
    network: {
      hospitals: 2500,
      doctors: 15000,
      pharmacies: 5000,
    },
    waitingPeriods: [
      { service: "General Medical Care", period: "None" },
      { service: "Specialist Visits", period: "30 days" },
      { service: "Major Procedures", period: "90 days" },
    ],
  },
  "2": {
    id: "2",
    name: "Premium Health Select",
    provider: "Aetna",
    monthlyPremium: 399,
    deductible: 1500,
    coverage: [
      "Primary Care",
      "Specialists",
      "Emergency Care",
      "Prescriptions",
      "Dental",
      "Vision",
    ],
    rating: 4.8,
    description:
      "A premium health plan offering comprehensive coverage including dental and vision. Perfect for families and individuals who want complete healthcare coverage.",
    benefits: [
      {
        title: "Comprehensive Coverage",
        description: "Includes dental and vision",
        icon: <Shield className="w-6 h-6 text-blue-500" />,
      },
      {
        title: "Low Deductible",
        description: "$1,500 annual deductible",
        icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      },
      {
        title: "Worldwide Coverage",
        description: "Emergency coverage worldwide",
        icon: <Heart className="w-6 h-6 text-blue-500" />,
      },
    ],
    network: {
      hospitals: 3500,
      doctors: 25000,
      pharmacies: 7500,
    },
    waitingPeriods: [
      { service: "General Medical Care", period: "None" },
      { service: "Dental Procedures", period: "60 days" },
      { service: "Vision Services", period: "30 days" },
    ],
  },
  "3": {
    id: "3",
    name: "Basic Coverage",
    provider: "UnitedHealth",
    monthlyPremium: 199,
    deductible: 3500,
    coverage: ["Primary Care", "Emergency Care", "Prescriptions"],
    rating: 4.0,
    description:
      "An affordable health plan providing essential coverage for individuals on a budget. Focuses on primary care and emergency services.",
    benefits: [
      {
        title: "Low Monthly Premium",
        description: "Most affordable option",
        icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      },
      {
        title: "Emergency Coverage",
        description: "24/7 emergency care access",
        icon: <Hospital className="w-6 h-6 text-blue-500" />,
      },
      {
        title: "Basic Prescriptions",
        description: "Generic drug coverage",
        icon: <Heart className="w-6 h-6 text-blue-500" />,
      },
    ],
    network: {
      hospitals: 1500,
      doctors: 10000,
      pharmacies: 3000,
    },
    waitingPeriods: [
      { service: "General Medical Care", period: "None" },
      { service: "Specialist Visits", period: "60 days" },
      { service: "Prescriptions", period: "30 days" },
    ],
  },
};

function PlanDetails() {
  const { id } = useParams<{ id: string }>();
  const plan = id ? samplePlans[id] : null;

  if (!plan) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Plan not found</h2>
          <Link
            to="/explore"
            className="mt-4 text-blue-500 hover:text-blue-600"
          >
            Return to Plans
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link
        to="/explore"
        className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Plans
      </Link>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{plan.name}</h1>
              <p className="text-lg text-gray-600">{plan.provider}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-900">
                ${plan.monthlyPremium}
              </p>
              <p className="text-sm text-gray-500">per month</p>
            </div>
          </div>
          <p className="mt-4 text-gray-600">{plan.description}</p>
        </div>

        {/* Key Benefits */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plan.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                {benefit.icon}
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Details */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Coverage Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Included Services
              </h3>
              <ul className="space-y-2">
                {plan.coverage.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Waiting Periods
              </h3>
              <ul className="space-y-2">
                {plan.waitingPeriods.map((period, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="font-medium">{period.service}:</span>
                    <span className="ml-2">{period.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Network Statistics */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Network Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-500">
                {plan.network.hospitals.toLocaleString()}
              </p>
              <p className="text-gray-600">Hospitals</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-500">
                {plan.network.doctors.toLocaleString()}
              </p>
              <p className="text-gray-600">Doctors</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-500">
                {plan.network.pharmacies.toLocaleString()}
              </p>
              <p className="text-gray-600">Pharmacies</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold text-gray-900">
                Ready to enroll?
              </p>
              <p className="text-gray-600">Get covered in minutes</p>
            </div>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanDetails;
