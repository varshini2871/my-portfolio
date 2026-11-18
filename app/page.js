const skills = [
  {
    title: "Programming",
    items: ["Python", "Java", "C"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Backend & Database",
    items: ["Node.js", "Express.js", "Firebase", "Firestore"],
  },
  {
    title: "Currently Learning",
    items: ["AI / ML", "Data Structures & Algorithms"],
  },
];

const projects = [
  {
    number: "01",
    title: "MedSlot",
    category: "Clinic Management System",
    status: "In Progress",
    description:
      "A doctor appointment management system designed to simplify patient bookings, manage appointment schedules, prioritize emergencies and provide digital prescriptions.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "LifeLink",
    category: "Blood Donor Finder",
    status: "Project",
    description:
      "A blood donor finder platform that connects people in need of blood with available donors. Includes donor registration, blood group search and emergency blood requests.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase", "Node.js"],
  },
  {
    number: "03",
    title: "Farmer Marketplace",
    category: "Web Application",
    status: "Project",
    description:
      "A digital marketplace that connects farmers directly with consumers, helping farmers sell their agricultural products without depending on middlemen.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
  },
  {
    number: "04",
    title: "LearnQuest",
    category: "EdTech / AI Concept",
    status: "Concept",
    description:
      "An interactive learning platform concept that combines AI-powered learning ideas and gamification to make education more engaging and personalized.",
    technologies: ["AI Concept", "EdTech", "Gamification"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="#home" className="text-2xl font-bold">
            V<span className="text-violet-500">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-gray-400 md:flex">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition hover:text-violet-400"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <a
            href="#contact"
            className="rounded-full bg-violet-600 px-6 py-3 text-sm font-medium transition hover:bg-violet-500"
          >
            Let's Connect ↗
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
      >

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl text-center">

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Computer Science Engineering Student
          </div>

          <p className="mb-4 text-lg text-gray-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            Varshini DN<span className="text-violet-500">.</span>
          </h1>

          <h2 className="mt-7 text-2xl font-medium text-gray-300 sm:text-3xl">
            Aspiring{" "}
            <span className="text-violet-400">
              AI/ML Engineer
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            A Computer Science Engineering student passionate about
            technology, artificial intelligence and building meaningful
            solutions. I enjoy exploring new technologies, solving
            problems and turning ideas into reality through code.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="#projects"
              className="rounded-full bg-violet-600 px-8 py-4 font-medium transition hover:bg-violet-500"
            >
              Explore My Projects ↗
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-8 py-4 transition hover:border-violet-400 hover:text-violet-400"
            >
              Get In Touch
            </a>

          </div>

          <div className="mt-20 flex justify-center gap-8 text-sm text-gray-500">
            <span>India</span>
            <span>•</span>
            <span>AI & Technology Enthusiast</span>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-28"
      >

        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Curious mind.
              <br />
              Creative thinker.
              <br />
              <span className="text-violet-400">
                Future innovator.
              </span>
            </h2>
          </div>

          <div>

            <p className="leading-8 text-gray-400">
              I'm Varshini, a Computer Science Engineering student
              with a growing interest in Artificial Intelligence
              and Machine Learning.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              I believe in learning by building. Through academic
              projects and personal exploration, I've been developing
              my programming skills and understanding how technology
              can solve real-world problems.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              Currently, I'm strengthening my foundations in
              Data Structures and Algorithms while exploring
              AI/ML and modern web technologies.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block border-b border-violet-400 pb-2 text-violet-400 transition hover:text-white"
            >
              Let's connect →
            </a>

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-t border-white/10 bg-[#0e0e12] px-6 py-28"
      >

        <div className="mx-auto max-w-6xl">

          <div className="mb-16 text-center">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              My Expertise
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Skills & Technologies
            </h2>

            <p className="mt-5 text-gray-400">
              Technologies I've worked with and continue to explore.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-violet-500/50"
              >

                <h3 className="mb-7 text-xl font-semibold text-violet-400">
                  {skill.title}
                </h3>

                <div className="flex flex-wrap gap-3">

                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-violet-400 hover:text-violet-300"
                    >
                      {item}
                    </span>
                  ))}

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-white/10 px-6 py-28"
      >

        <div className="mx-auto max-w-6xl">

          <div className="mb-16">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              What I've Built
            </p>

            <h2 className="text-4xl font-bold sm:text-5xl">
              Featured Projects<span className="text-violet-500">.</span>
            </h2>

            <p className="mt-5 text-gray-400">
              A collection of ideas and projects from my learning journey.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {projects.map((project) => (
              <div
                key={project.number}
                className="group rounded-2xl border border-white/10 bg-[#111114] p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500/50"
              >

                <div className="mb-10 flex items-center justify-between">

                  <span className="text-4xl font-bold text-violet-500/40">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                    {project.status}
                  </span>

                </div>

                <p className="mb-3 text-sm text-violet-400">
                  {project.category}
                </p>

                <h3 className="mb-5 text-2xl font-semibold transition group-hover:text-violet-400">
                  {project.title}
                </h3>

                <p className="min-h-28 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-violet-500/10 px-3 py-2 text-xs text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="border-t border-white/10 bg-[#0e0e12] px-6 py-28">

        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Academic Background
          </p>

          <h2 className="mb-12 text-4xl font-bold">
            Education
          </h2>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">

            <p className="text-sm text-violet-400">
              Undergraduate
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              Bachelor of Engineering
            </h3>

            <p className="mt-3 text-gray-400">
              Computer Science and Engineering
            </p>

            <p className="mt-3 text-sm text-gray-500">
              College name to be added
            </p>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-28"
      >

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-6xl">
            Let's create something
            <br />
            <span className="text-violet-400">
              meaningful together.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-gray-400">
            I'm always excited to connect with fellow developers,
            learn from new experiences and explore opportunities
            to build innovative solutions.
          </p>

          <a
            href="mailto:yourmail@example.com"
            className="mt-10 inline-block rounded-full bg-violet-600 px-9 py-4 font-medium transition hover:bg-violet-500"
          >
            Say Hello ↗
          </a>

          <div className="mt-12 flex justify-center gap-8 text-sm text-gray-400">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-violet-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-violet-400"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">

          <p>
            © 2026 Varshini DN. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition hover:text-violet-400"
          >
            Back to top ↑
          </a>

        </div>

      </footer>

    </main>
  );
}