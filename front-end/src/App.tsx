import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chat from './pages/Chat';
import ExplorePlans from './pages/ExplorePlans';
import { ArrowRight, Search, MessageCircle, User } from 'lucide-react';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
            <div>
              <h1 className="text-5xl font-bold text-secondary-900 leading-tight">
                Find the perfect
                <span className="block text-primary-600">health insurance plan</span>
              </h1>
              <p className="mt-4 text-lg text-secondary-600">
                Co-Care Cares! Get personalized recommendations and understand your options in simple terms.
              </p>
              <div className="mt-8">
                <Link to="/explore" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                alt="Medical professional working"
                className="rounded-lg shadow-xl w-[120%] h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center">
                <div className="rounded-full bg-primary-100 p-3">
                  <Search className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-secondary-900">Explore Plans</h3>
              <p className="mt-2 text-secondary-600">
                Browse through available insurance plans in your area with detailed information.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <div className="rounded-full bg-primary-100 p-3">
                  <MessageCircle className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-secondary-900">AI Assistant</h3>
              <p className="mt-2 text-secondary-600">
                Get help understanding insurance terms and plans with our friendly chatbot.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <div className="rounded-full bg-primary-100 p-3">
                  <User className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-secondary-900">Personalized Profile</h3>
              <p className="mt-2 text-secondary-600">
                Create your profile to get tailored insurance recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/explore" element={<ExplorePlans />} />
      </Routes>
    </div>
  );
}

export default App;