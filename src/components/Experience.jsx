import SectionHeading from "./ui/SectionHeading";

const TIMELINE = [
  {
    type: "Internship",
    title: "Software Engineer Intern",
    org: "CPABooks",
    location: "Remote",
    duration: "July 2026 – Present",
    statusLabel: "Currently Working",
    description:
      "Working on ERP development using Odoo, solving real-world business problems in a remote environment. Contributing to the customization and development of Odoo modules, including implementing new features, modifying existing functionalities, and optimizing workflows based on business requirements.",
    points: [
      "Actively involved in problem-solving tasks, debugging issues, and improving system performance for efficient, scalable solutions.",
      "Collaborating with the team to analyze requirements, design solutions, and deliver high-quality code following best practices.",
      "Gaining hands-on experience with Python, the Odoo framework, and database management.",
      "Strengthening analytical thinking and real-world problem-solving skills in a professional environment.",
    ],
    tech: ["Python", "Odoo", "PostgreSQL", "SQL"],
  },
  {
    type: "Internship",
    title: "Frontend Developer Intern",
    org: "Risetogether",
    duration: "March – June 2026",
    description:
      "4-month frontend internship focused on building production UI for a modern web application.",
    points: [
      "Built responsive and modern UI using Next.js, TypeScript, and shadcn/ui.",
      "Developed reusable components and maintained clean, scalable code.",
      "Collaborated with team members to implement features and integrate APIs.",
      "Ensured smooth user experience and performance optimization.",
    ],
    tech: ["Next.js", "TypeScript", "shadcn/ui"],
  },
  {
    type: "Project Contribution",
    title: "Feletrip – Hotel Booking Platform",
    org: "Live Product",
    duration: "2026",
    statusLabel: "Live",
    live: "https://www.feletrip.com/",
    description:
      "Contributed to a hotel booking platform where users can add their own hotels and book available rooms. Implemented dynamic data handling and API integration for listing and booking functionality.",
    points: [],
    tech: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS"],
  },
];

function Experience() {
  return (
    <section
      className="bg-background-light dark:bg-background-dark py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've Contributed"
          className="experience-header mb-12 sm:mb-16"
        />

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-white/10 to-transparent hidden sm:block" />

          <div className="space-y-8 sm:space-y-10">
            {TIMELINE.map((item) => (
              <div
                key={item.title}
                className="experience-card relative sm:pl-16"
              >
                {/* Timeline dot */}
                <span className="hidden sm:flex absolute left-0 top-8 h-10 w-10 items-center justify-center rounded-full bg-background-dark border-2 border-primary/40">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                </span>

                <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10 hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-300 hover:shadow-card">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="chip">{item.type}</span>
                    {item.location && (
                      <span className="chip">{item.location}</span>
                    )}
                    {item.statusLabel && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        {item.statusLabel}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-primary/80 uppercase tracking-widest mb-4">
                    {item.org}
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {item.points.length > 0 && (
                    <ul className="space-y-3 mb-6">
                      {item.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm text-gray-300 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-gray-300 py-1.5 bg-white/5 px-3 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.live && (
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors"
                      >
                        Visit feletrip.com
                        <span className="material-icons-outlined text-base">
                          open_in_new
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
