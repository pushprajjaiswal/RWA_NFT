import React from 'react';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import ConnectButton from './components/ConnectButton';
import CreateButton from './components/CreateButton';
import TopSellingNFTs from './components/TopSellingNFTs';
import TopSellers from './components/TopSellers';
import Footer from './components/Footer';

const App = () => {
  const isConnected = true; // Replace with your logic for wallet connection

  return (
    <div>
      <Navbar />
      <Banner />
      {!isConnected && <ConnectButton />}
      {isConnected && <CreateButton />}
      <TopSellingNFTs />
      <TopSellers />
      <Footer />
    </div>
  );
};

export default App;
