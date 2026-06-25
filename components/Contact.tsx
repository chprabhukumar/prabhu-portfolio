"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        await navigator.clipboard.writeText(
            "challaprabhu107@gmail.com"
        );

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <section
            id="contact"
            className="py-32 max-w-6xl mx-auto px-8"
        >
            <h2 className="text-5xl font-bold mb-4">
                Let's Connect
            </h2>

            <p className="text-gray-400 mb-12">
                Looking for Angular, Frontend or Remote opportunities.
            </p>

            <div className="bg-zinc-900 p-10 rounded-3xl">
                <div className="space-y-6">

                    <button
                        onClick={copyEmail}
                        className="flex items-center gap-4 hover:text-purple-400 transition"
                    >
                        <FaEnvelope size={24} />
                        {copied
                            ? "Email Copied ✓"
                            : "challaprabhu107@gmail.com"}
                    </button>

                    <a
                        href="https://github.com/chprabhukumar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 hover:text-purple-400 transition"
                    >
                        <FaGithub size={24} />
                        github.com/chprabhukumar
                    </a>

                    <a
                        href="https://www.linkedin.com/in/prabhu-kumar-challa-b385a31ab/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 hover:text-purple-400 transition"
                    >
                        <FaLinkedin size={24} />
                        LinkedIn Profile
                    </a>

                </div>
            </div>
        </section>
    );
}