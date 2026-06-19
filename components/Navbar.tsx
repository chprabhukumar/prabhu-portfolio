export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
                <h1 className="font-bold text-xl text-purple-400">
                    Prabhu Kumar
                </h1>

                <div className="flex gap-8 text-gray-300">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}