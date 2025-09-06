'use client';

import { BellRing, CircleUser } from 'lucide-react';
import { usePathname } from 'next/navigation';

const DashboardNavbar = ({ onMenuClick }: { onMenuClick?: () => void }) => {

  const pathname = usePathname();

  const screenNames: Record<string, string> = {
    '/dashboard': 'Dashboard',
    '/dashboard/serviceAmbassador': 'Service Ambassador',
    '/dashboard/settings': 'Settings',
  };

  const screenName = screenNames[pathname] || 'Dashboard';

  return (
    <nav className="bg-white shadow-sm border-b border-gray-300 sticky top-0 left-0 right-0 z-50 px-4">
      <div className="">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center gap-2">

            <button
              onClick={onMenuClick}
              aria-label="Open sidebar"
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <span className="text-xl pl-[210px] max-[1200px]:pl-0 font-bold text-gray-800">
              {screenName}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:space-x-4 ml-auto">
            <BellRing size={24} className="text-gray-500 hover:text-gray-900 cursor-pointer" />
            <CircleUser size={28} className="text-gray-500 hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}


export default DashboardNavbar;