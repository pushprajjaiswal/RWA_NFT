import React from 'react';

const TopSellers = () => {
  // Dummy data
  const sellers = [
    { id: 1, name: 'CryptoArtist123', totalSales: 25 },
    { id: 2, name: 'NFTMaster456', totalSales: 18 },
    { id: 3, name: 'DigitalArtCreator', totalSales: 15 },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Top Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sellers.map((seller) => (
            <div key={seller.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold text-lg">{seller.name}</h3>
              <p className="text-gray-600">{seller.totalSales} Total Sales</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
