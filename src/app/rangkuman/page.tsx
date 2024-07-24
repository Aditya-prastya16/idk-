import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6">Data Table</h1>
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <div className="block md:hidden">
              {/* Mobile view */}
              <div className="flex flex-col gap-4">
                {[{
                  no: 1, asal: 'John Doe', nominal: 'john@example.com', tanggal: '2024-07-24', catatan: 'Admin'
                }, {
                  no: 2, asal: 'Jane Smith', nominal: 'jane@example.com', tanggal: '2024-07-24', catatan: 'Editor'
                }, {
                  no: 3, asal: 'Bob Johnson', nominal: 'bob@example.com', tanggal: '2024-07-24', catatan: 'Viewer'
                }].map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between font-semibold">
                        <span>No:</span><span>{item.no}</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Asal:</span><span>{item.asal}</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Nominal:</span><span>{item.nominal}</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Tanggal:</span><span>{item.tanggal}</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span>Catatan:</span><span>{item.catatan}</span>
                      </div>
                      <div className="flex justify-between">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">Update</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              {/* Desktop view */}
              <table className="min-w-full bg-white">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="text-left p-3 md:p-4 font-semibold text-sm md:text-base">No</th>
                    <th className="text-left p-3 md:p-4 font-semibold text-sm md:text-base">Nama Barang</th>
                    <th className="text-left p-3 md:p-4 font-semibold text-sm md:text-base">Harga</th>
                    <th className="text-left p-3 md:p-4 font-semibold text-sm md:text-base">Status</th>
                    <th className="text-left p-3 md:p-4 font-semibold text-sm md:text-base">Catatan</th>
                    <th className="text-left p-3 md:p-4 font-semibold text-sm md:text-base">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition duration-300">
                    <td className="p-3 md:p-4 text-sm md:text-base">1</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">John Doe</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">john@example.com</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">2024-07-24</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">Admin</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">Update</button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Delete</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition duration-300">
                    <td className="p-3 md:p-4 text-sm md:text-base">2</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">Jane Smith</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">jane@example.com</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">2024-07-24</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">Editor</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">Update</button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Delete</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-100 transition duration-300">
                    <td className="p-3 md:p-4 text-sm md:text-base">3</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">Bob Johnson</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">bob@example.com</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">2024-07-24</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">Viewer</td>
                    <td className="p-3 md:p-4 text-sm md:text-base">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">Update</button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page