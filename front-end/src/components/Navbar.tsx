import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Stethoscope } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="relative">
              <Heart className="w-6 h-6 text-primary-600" />
              <Stethoscope className="w-4 h-4 text-primary-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <Link to="/" className="ml-2 text-xl font-semibold text-secondary-900">Co-Care</Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/explore" className="text-secondary-600 hover:text-primary-600">
              Explore Plans
            </Link>
            <Link to="/compare" className="text-secondary-600 hover:text-primary-600">
              Compare
            </Link>
            <Link to="/chat" className="text-secondary-600 hover:text-primary-600">
              Chat
            </Link>
            <Link to="/profile" className="text-secondary-600 hover:text-primary-600">
              Profile
            </Link>
            <Link to="/signin" className="text-secondary-600 hover:text-primary-600">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;