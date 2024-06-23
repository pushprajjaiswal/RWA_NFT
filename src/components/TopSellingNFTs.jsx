import React from 'react';

const TopSellingNFTs = () => {
  // Dummy data
  const nfts = [
    { id: 1, name: 'Art NFT', price: '0.5 ETH' },
    { id: 2, name: 'Digital Collectible', price: '1 ETH' },
    { id: 3, name: 'Crypto Art', price: '0.8 ETH' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Top Selling NFTs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nfts.map((nft) => (
            <div key={nft.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold text-lg">{nft.name}</h3>
              <p className="text-gray-600">{nft.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingNFTs;
