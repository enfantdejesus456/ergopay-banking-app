import Link from 'next/link';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <main className="flex flex-col items-center justify-center flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Login to ErgoPay</h1>
        <form className="flex flex-col w-64 space-y-4">
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <input type="password" placeholder="Password" className="p-2 border rounded" />
          <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
        <p className="mt-4">
          Don't have an account? <Link href="#">Sign Up</Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}
