import Image from "next/image";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Stars from "@/components/Stars";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <section className="max-w-7xl mx-auto px-8 py-32 flex flex-col md:flex-row items-center gap-16">

          <div className="flex-1">
            <p className="text-purple-400 text-lg">
              Hello, I'm
            </p>

            <h1 className="text-7xl md:text-8xl font-bold">
              Prabhu Kumar
            </h1>

            <h2 className="text-2xl text-gray-400 mt-5">
              Front-End Developer | Angular Specialist
            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-8">
              Front-End Developer with 4+ years of experience building
              scalable and high-performance web applications using
              Angular, TypeScript, and JavaScript.
            </p>

            <div className="mt-10 flex gap-5">
              <a
                  href="/resume.pdf"
                  download
                  className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700"
              >
                Download CV
              </a>

              <a
                  href="#contact"
                  className="border border-purple-500 px-6 py-3 rounded-xl"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center relative">
            <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>

            <Image
                src="/avatar.png"
                alt="Prabhu Kumar"
                width={500}
                height={600}
                className="rounded-full"
            />
          </div>

        </section>

          <FadeIn>
              <About />
          </FadeIn>

          <FadeIn>
              <Skills/>
          </FadeIn>

          <FadeIn>
        <Experience/>
          </FadeIn>

          <FadeIn>
            <Projects/>
          </FadeIn>

          <FadeIn>
              <Contact/>
          </FadeIn>
          <FadeIn>
              <Footer/>
          </FadeIn>
         <Stars/>
      </main>
  );
}