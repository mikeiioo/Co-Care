import React, { useState, useCallback, useRef } from "react";
import { Filter, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

interface Plan {
  id: string;
  name: string;
  provider: string;
  monthlyPremium: number;
  deductible: number;
  coverage: string[];
  rating: number;
  image: string;
}

const samplePlans: Plan[] = [
  {
    id: "1",
    name: "Essential Care Plus",
    provider: "BlueCross",
    monthlyPremium: 299,
    deductible: 2500,
    coverage: ["Primary Care", "Specialists", "Emergency Care", "Prescriptions"],
    rating: 4.5,
    image: "https://painchas.com/wp-content/uploads/2015/05/BlueCross_BlueShield-logo.png",
  },
  {
    id: "2",
    name: "Premium Health Select",
    provider: "Aetna",
    monthlyPremium: 399,
    deductible: 1500,
    coverage: ["Primary Care", "Specialists", "Emergency Care", "Prescriptions", "Dental", "Vision"],
    rating: 4.8,
    image: "https://carmichaeldds.com/wp-content/uploads/2019/05/aetna-logo.png",
  },
  {
    id: "3",
    name: "Basic Coverage",
    provider: "UnitedHealth",
    monthlyPremium: 199,
    deductible: 3500,
    coverage: ["Primary Care", "Emergency Care", "Prescriptions"],
    rating: 4.0,
    image: "https://upload.wikimedia.org/wikipedia/en/2/29/UnitedHealthcare_%28logo%29.svg",
  },
  {
    id: "4",
    name: "Silver Care Advantage",
    provider: "Humana",
    monthlyPremium: 349,
    deductible: 2000,
    coverage: ["Primary Care", "Specialists", "Emergency Care", "Prescriptions", "Mental Health"],
    rating: 4.2,
    image: "https://1000logos.net/wp-content/uploads/2020/08/Humana-logo.jpg",
  },
  {
    id: "5",
    name: "Gold Plus Plan",
    provider: "Cigna",
    monthlyPremium: 429,
    deductible: 1000,
    coverage: ["Primary Care", "Specialists", "Emergency Care", "Prescriptions", "Dental", "Vision", "Mental Health"],
    rating: 4.7,
    image: "https://1000logos.net/wp-content/uploads/2020/07/Cigna-Logo.png",
  },
  {
    id: "6",
    name: "Bronze Essentials",
    provider: "Kaiser Permanente",
    monthlyPremium: 249,
    deductible: 5000,
    coverage: ["Primary Care", "Emergency Care", "Prescriptions", "Urgent Care"],
    rating: 3.9,
    image: "https://crpd.com/staging/wp-content/uploads/kaiser-permanente-logo-png-transparent.png",
  },
  {
    id: "7",
    name: "Family Care Network",
    provider: "BlueShield",
    monthlyPremium: 499,
    deductible: 1200,
    coverage: ["Primary Care", "Specialists", "Emergency Care", "Prescriptions", "Dental", "Vision", "Maternity Care"],
    rating: 4.6,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Blue_Shield_of_California_logo.png",
  },
  {
    id: "8",
    name: "Elite Health Choice",
    provider: "Aetna",
    monthlyPremium: 559,
    deductible: 1000,
    coverage: ["Primary Care", "Specialists", "Emergency Care", "Prescriptions", "Dental", "Vision", "Mental Health", "Maternity Care"],
    rating: 4.9,
    image: "https://carmichaeldds.com/wp-content/uploads/2019/05/aetna-logo.png",
  },
  {
    id: "9",
    name: "Affordable Care Network",
    provider: "UnitedHealth",
    monthlyPremium: 199,
    deductible: 6000,
    coverage: ["Primary Care", "Emergency Care", "Prescriptions"],
    rating: 3.8,
    image: "https://upload.wikimedia.org/wikipedia/en/2/29/UnitedHealthcare_%28logo%29.svg",
  },
  {
    id: "10",
    name: "MaxCare Flex",
    provider: "Humana",
    monthlyPremium: 449,
    deductible: 1500,
    coverage: ["Primary Care", "Specialists", "Emergency Care", "Prescriptions", "Dental", "Vision", "Urgent Care"],
    rating: 4.4,
    image: "https://1000logos.net/wp-content/uploads/2020/08/Humana-logo.jpg",
  },
  {
    id: "11",
    name: "Complete Coverage Plan",
    provider: "Cigna",
    monthlyPremium: 499,
    deductible: 1200,
    coverage: [
      "Primary Care",
      "Specialists",
      "Emergency Care",
      "Prescriptions",
      "Dental",
      "Vision",
      "Maternity Care",
      "Mental Health",
    ],
    rating: 4.8,
    image: "https://1000logos.net/wp-content/uploads/2020/07/Cigna-Logo.png",
  },
  {
    id: "12",
    name: "Health Saver Plan",
    provider: "Kaiser Permanente",
    monthlyPremium: 269,
    deductible: 3500,
    coverage: ["Primary Care", "Specialists", "Emergency Care", "Prescriptions"],
    rating: 4.1,
    image: "https://crpd.com/staging/wp-content/uploads/kaiser-permanente-logo-png-transparent.png",
  },
  {
    id: "13",
    name: "Platinum Care Advantage",
    provider: "BlueCross",
    monthlyPremium: 599,
    deductible: 500,
    coverage: [
      "Primary Care",
      "Specialists",
      "Emergency Care",
      "Prescriptions",
      "Dental",
      "Vision",
      "Maternity Care",
      "Mental Health",
      "Urgent Care",
    ],
    rating: 5.0,
    image: "https://www.hamiltonma.gov/wp-content/uploads/2016/12/blue-cross-blue-shield-logo-vector.png",
  },
  {
    id: "14",
    name: "High Coverage Select",
    provider: "Aetna",
    monthlyPremium: 499,
    deductible: 1000,
    coverage: [
      "Primary Care",
      "Specialists",
      "Emergency Care",
      "Prescriptions",
      "Dental",
      "Vision",
      "Maternity Care",
      "Urgent Care",
    ],
    rating: 4.5,
    image: "https://carmichaeldds.com/wp-content/uploads/2019/05/aetna-logo.png",
  },
  {
    id: "24",
    name: "Basic Bronze Plan",
    provider: "Humana",
    monthlyPremium: 249,
    deductible: 5500,
    coverage: ["Primary Care", "Emergency Care", "Prescriptions"],
    rating: 3.5,
    image: "https://1000logos.net/wp-content/uploads/2020/08/Humana-logo.jpg",
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 40.7128,
  lng: -74.0060,
};

function ExplorePlans() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [center, setCenter] = useState(defaultCenter);
  const mapRef = useRef<google.maps.Map | null>(null);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ["(cities)"],
      componentRestrictions: { country: "us" },
    },
    debounce: 300,
  });

  const handleSelect = useCallback(
    async (address: string) => {
      setValue(address, false);
      clearSuggestions();

      try {
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setCenter({ lat, lng });
        mapRef.current?.panTo({ lat, lng });
      } catch (error) {
        console.error("Error getting geocode: ", error);
      }
    },
    [setValue, clearSuggestions]
  );

  const filteredPlans = samplePlans.filter(
    (plan) =>
      plan.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      plan.monthlyPremium >= priceRange[0] &&
      plan.monthlyPremium <= priceRange[1]
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Map Section */}
      <div className="relative h-[500px] mb-8">
        <LoadScript
          googleMapsApiKey="AIzaSyAsw_phfiVEfGMUvvc-o8iHKm3z7FslTVs"
          libraries={["places"]}
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={center}
            onLoad={onMapLoad}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>

        {/* Search Bar Overlay */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 z-50">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && status === "OK" && data.length > 0) {
                  e.preventDefault();
                  handleSelect(data[0].description);
                }
              }}
              disabled={!ready}
              placeholder="Enter your location..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg shadow-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            {status === "OK" && (
              <ul className="absolute z-10 w-full bg-white mt-1 rounded-lg shadow-lg">
                {data.map(({ place_id, description }) => (
                  <li
                    key={place_id}
                    onClick={() => handleSelect(description)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="px-4 py-8">
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
          {filteredPlans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <img
                src={plan.image}
                alt={`${plan.provider} logo`}
                className="w-24 h-24 object-contain mx-auto mb-4"
              />
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
                    {plan.coverage.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/plan/${plan.id}`}
                  className="block w-full text-center mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExplorePlans;
