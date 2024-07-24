import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-row bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Left side with illustration */}
        <div className="hidden md:block w-1/2 p-4">
          <Image src="/login.png" width={300} height={300} alt="Login Illustration" className="w-full h-auto rounded-lg" />
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-[#1C2634] mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="username">Masukan Username / Email :</label>
              <input type="text" id="username" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Masukan Username / Email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="password">Masukan Password :</label>
              <input type="password" id="password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Masukan Password" required />
            </div>
            <button type="submit" className="w-full bg-[#1C2634] text-white hover:bg-blue-500 p-3 rounded-lg transition duration-300">Login / Masuk</button>
          </form>
        </div>
      </div>
    </div>
  );
}
