const projects = [
    {
        title: "Contacts App",
        description: "Client management system built using Angular."
    },
    {
        title: "Firm Inbox",
        description: "Responsive UI and reusable component library."
    },
    {
        title: "Forms Module",
        description: "Reusable reactive forms and validations."
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-bold mb-12">
                Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="bg-zinc-900 p-8 rounded-2xl hover:scale-105 transition"
                    >
                        <h3 className="text-xl font-semibold">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 mt-4">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}