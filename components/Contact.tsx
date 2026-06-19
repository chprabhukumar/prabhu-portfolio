import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
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

                    <a
                        href="mailto:challaprabhu107@gmail.com"
                        className="flex items-center gap-4"
                    >
                        <FaEnvelope size={24} />
                        challaprabhu107@gmail.com
                    </a>

                    <a
                        href="https://github.com/chprabhukumar"
                        target="_blank"
                        className="flex items-center gap-4"
                    >
                        <FaGithub size={24} />
                        github.com/chprabhukumar
                    </a>

                    <a
                        href="https://www.linkedin.com/in/prabhu-kumar-challa-b385a31ab/"
                        target="_blank"
                        className="flex items-center gap-4"
                    >
                        <FaLinkedin size={24} />
                        LinkedIn Profile
                    </a>

                </div>
            </div>
        </section>
    );
}