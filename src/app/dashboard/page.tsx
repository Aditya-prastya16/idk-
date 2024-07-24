"use client";

import Navbar from "@/components/Navbar";

const Page = () => {


  return (
    <div className="bg-gray-100 text-gray-800 p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600">Selamat Datang, Username</h1>
      <p className="mt-2 text-gray-600">Catat Pendapatmu</p>

        <Navbar/>
     

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-gray-700">Total Pendapatan Harian</h2>
          <p className="text-xl text-blue-600">Rp. 999.999</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-gray-700">Total Pendapatan Mingguan</h2>
          <p className="text-xl text-blue-600">Rp. 999.999</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-gray-700">Total Pendapatan Bulanan</h2>
          <p className="text-xl text-blue-600">Rp. 999.999</p>
          <p className="text-gray-500">Kamu Dapat Rp. 999.999 bulan ini</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          
          <p className="text-gray-500">Chart</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          
          <p className="text-gray-500">Chart</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          
          <p className="text-gray-500">Chart</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
