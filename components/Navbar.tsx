"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="
fixed
top-4
left-1/2
-translate-x-1/2
z-50
w-[95%]
max-w-5xl
bg-black/40
backdrop-blur-xl
border
border-purple-500/20
rounded-2xl
">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                <h1 className="text-xl font-bold text-purple-400">
                    Prabhu Kumar
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-gray-300">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="hover:text-purple-400 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
                    <div className="flex flex-col p-6 gap-5">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-purple-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}