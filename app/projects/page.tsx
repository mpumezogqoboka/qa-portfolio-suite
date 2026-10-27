import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Automated Portfolio Suite (Continuous Integration)",
      subtitle: "Next.js Application Architecture & Playwright Suite",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Playwright", "GitHub Actions"],
      description: "My personal brand portfolio workspace designed explicitly as an end-to-end QA showcase. Features a multi-page component framework tested using a headless automated Playwright suite triggered automatically on code push via a custom GitHub Actions CI/CD configuration pipe.",
      links: { github: "#", live: "/" }
    },
    {
      title: "E2E Health Workflow Regression Suite",
      subtitle: "Web Application Diagnostics Optimization",
      tech: ["Playwright", "TypeScript", "Postman API", "SQL", "Jira"],
      description: "Engineered comprehensive functional and validation suites mimicking mission-critical patient workflows. Executed deep regressions against consultation setups, checked system state configurations via relational databases, and verified backend communication endpoints using Postman.",
      links: { github: "#" }
    },
    {
      title: "High-Traffic Mobile Feature Validation Matrix",
      subtitle: "Cross-Platform Ecosystem Verification",
      tech: ["Manual Testing", "Test Case Design", "Android", "iOS", "Jira"],
      description: "Designed and executed a matrix of over 150+ detailed functional test cases protecting core social and interactive features for a high-traffic app ecosystem. Validated responsive layout rendering, interface alignment variations, platform configurations, and production release sanity checkpoints.",
      links: { github: "#" }
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-zinc-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header Introduction */}
        <div className="space-y-3 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            QA Engineering Projects
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed max-w-2xl">
            A targeted directory displaying active automation code frameworks, integration configurations, and strategic testing structures implemented to protect application health.
          </p>
        </div>

        {/* Projects Structural Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              data-testid={`project-card-${idx}`}
              className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all duration-200 group shadow-lg"
            >
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h2>
                  <p className="text-xs text-zinc-500 font-medium pt-0.5">{project.subtitle}</p>
                </div>
                
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Tech badges layout block */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[11px] bg-zinc-950 text-blue-400 border border-blue-950 px-2 py-0.5 rounded-md font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Functional CTA Action Links with test assertions anchors */}
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/50 mt-6">
                <Link
                  href={project.links.github}
                  data-testid={`project-github-${idx}`}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                >
                  <span>View Code base</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
                
                {project.links.live && (
                  <Link
                    href={project.links.live}
                    data-testid={`project-live-${idx}`}
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Live App Demo</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
