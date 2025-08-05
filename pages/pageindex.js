import Link from 'next/link';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <main className="flex flex-col items-center justify-center flex-1 p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ErgoPay</h1>
        <p className="text-lg mb-6">
          Your modern embedded banking platform with U.S. bank accounts and virtual cards.
        </p>
        <Link href="/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Login / Sign Up
          </button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
