import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect Match
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join our community and start your journey to meaningful connections
          </p>
          <div className="space-x-4">
            <Link
              href="/signup"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors border border-pink-500"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Create Your Profile</h3>
            <p className="text-gray-600">
              Showcase your personality and interests with a beautiful profile
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Find Matches</h3>
            <p className="text-gray-600">
              Discover people who share your interests and values
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Start Chatting</h3>
            <p className="text-gray-600">
              Connect with your matches and build meaningful relationships
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
