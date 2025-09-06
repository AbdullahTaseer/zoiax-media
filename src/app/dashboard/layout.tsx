'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import DashboardNavbar from '@/components/navbar/DashboardNavbar';

const navLinks = [
    { href: '/dashboard/serviceAmbassador', label: 'Service Ambassador' },
    { href: '/dashboard/settings', label: 'Settings' },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-gray-50">

            <aside className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-100 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'max-[1200px]:-translate-x-full'}`}>

                <div className="px-6 py-3.5 border-b border-gray-200">
                    <h1 className="text-[#012641] text-[24px] font-[800] whitespace-nowrap">
                        Zoiax Media
                    </h1>
                </div>

                <nav className="p-4">
                    <ul className="space-y-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setSidebarOpen(false)}
                                        className={`
                      block px-4 py-2 rounded-md text-sm font-medium transition-colors
                      ${isActive
                                                ? 'bg-[#012641] text-white shadow-md'
                                                : 'text-gray-700 hover:bg-[#012641]/10 hover:text-[#012641]'
                                            }
                    `}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-60 max-[1200px]:block hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <DashboardNavbar onMenuClick={() => setSidebarOpen(true)} />

            <main className="min-h-screen p-4 ml-64 max-[1200px]:ml-0">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;