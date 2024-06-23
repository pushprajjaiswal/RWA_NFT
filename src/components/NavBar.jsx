import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">RWA NFT</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Explore</a>
            <a href="#" className="hover:text-gray-300">My NFTs</a>
            <a href="#" className="hover:text-gray-300">Connect Wallet</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
