const skills = [
    "Angular",
    "TypeScript",
    "JavaScript",
    "RxJS",
    "HTML5",
    "CSS3",
    "SCSS",
    "Git",
    "Jenkins",
    "REST APIs"
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-bold mb-12">Skills</h2>

            <div className="grid md:grid-cols-5 gap-6">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="bg-white/5
backdrop-blur-md
border
border-purple-500/20 rounded-xl p-6 text-center hover:scale-105
hover:border-purple-500
transition-all
duration-300"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}