import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <ul className="flex justify-center space-x-4">
          <li><a href="#" className="hover:text-gray-300">About Us</a></li>
          <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
          <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
        </ul>
        <p className="mt-4">&copy; 2024 NFT Marketplace. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
