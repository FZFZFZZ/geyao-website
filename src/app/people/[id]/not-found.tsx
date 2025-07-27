import Link from "next/link";
import { ArrowLeft, Users, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users size={48} className="text-gray-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Member Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            The member you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/people"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/80 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to People
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-700/50 text-white px-6 py-3 rounded-full hover:bg-gray-600/50 transition-colors"
          >
            <Search size={20} />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
} 