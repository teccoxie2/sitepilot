import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | SitePilot',
  description: 'The page you are looking for could not be found. Browse our web hosting guides and AI tools reviews.',
  robots: {
    index: false,
    follow: true,
  }
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
          <div className="text-6xl mb-6">🧭</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Back to Home
            </Link>
            
            <div className="text-sm text-gray-500">
              <p>Looking for something specific? Try these popular pages:</p>
            </div>
            
            <div className="grid grid-cols-1 gap-2 mt-6">
              <Link href="/web-hosting" className="text-blue-600 hover:text-blue-800 text-sm">
                🏠 Best Web Hosting 2026
              </Link>
              <Link href="/ai-tools" className="text-blue-600 hover:text-blue-800 text-sm">
                🤖 AI Tools & Reviews
              </Link>
              <Link href="/website-builders" className="text-blue-600 hover:text-blue-800 text-sm">
                🔨 Website Builders Guide
              </Link>
              <Link href="/hosting" className="text-blue-600 hover:text-blue-800 text-sm">
                📊 Hosting Comparison
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}