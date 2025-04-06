import React from "react";
import { ArrowRight, MessageCircle, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Find the perfect</span>
                  <span className="block text-blue-500">
                    health insurance plan
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Compare insurance plans that cover all your health needs. Get
                  personalized recommendations and understand your options in
                  simple terms.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/explore"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Healthcare professionals"
          />
        </div>
      </div>

      {/* Features */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link to="/explore">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                <Search className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">
                  Explore Plans
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Browse through available insurance plans in your area with
                  detailed information.
                </p>
              </div>
            </Link>
            <Link to="/chat">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                <MessageCircle className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">
                  AI Assistant
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Get help understanding insurance terms and plans with our
                  friendly chatbot.
                </p>
              </div>
            </Link>
            <Link to="profile">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                <User className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">
                  Personalized Profile
                </h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Create your profile to get tailored insurance recommendations.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
