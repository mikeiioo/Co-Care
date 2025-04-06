import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import ExplorePlans from './pages/ExplorePlans';
import ComparePlans from './pages/ComparePlans';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Heart className="w-8 h-8 text-blue-500" />
                  <span className="ml-2 text-xl font-semibold text-gray-900">Co-Care</span>
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link to="/explore" className="text-gray-600 hover:text-gray-900">Explore Plans</Link>
                <Link to="/compare" className="text-gray-600 hover:text-gray-900">Compare</Link>
                <Link to="/chat" className="text-gray-600 hover:text-gray-900">Chat</Link>
                <Link to="/profile" className="text-gray-600 hover:text-gray-900">Profile</Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/explore" element={<ExplorePlans />} />
          <Route path="/compare" element={<ComparePlans />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;