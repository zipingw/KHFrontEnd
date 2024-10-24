// src/app/components/Header.tsx
export default function Header() {
    return (
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-red-600 text-2xl font-bold">RTR FM 92.1</span>
          </div>
  
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-red-600">RADIO</a>
            <a href="#" className="text-gray-900 hover:text-red-600">DISCOVER</a>
            <a href="#" className="text-gray-900 hover:text-red-600">COMMUNITY</a>
            <a href="#" className="text-gray-900 hover:text-red-600">EVENTS</a>
            <a href="#" className="text-gray-900 hover:text-red-600">DONATE</a>
          </nav>
  
          <div className="flex items-center space-x-4">
            <button className="bg-red-600 text-white p-2 rounded-md">▶</button>
            <button className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    );
  }