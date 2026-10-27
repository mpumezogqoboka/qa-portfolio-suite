import Link from "next/link";

export default function AboutPage() {
  const experiences = [
    {
      role: "QA Engineer",
      company: "Udok (Contract)",
      type: "Hybrid",
      period: "Aug 2025 - Dec 2025",
      location: "Paarl, Western Cape",
      description: [
        "Performed manual and automated testing of web-based healthcare application workflows, including patient registration and consultation processes.",
        "Designed and executed functional, regression, smoke, exploratory and end-to-end test scenarios across key application features.",
        "Developed and maintained automated end-to-end tests using Playwright.",
        "Performed API testing and validation using Postman and used SQL to validate application and database data during testing and defect investigation.",
        "Identified, documented and tracked defects in Jira, collaborating with developers to investigate issues, verify fixes and complete regression testing.",
        "Participated in Agile/Scrum activities, release readiness and production/customer support rotation."
      ]
    },
    {
      role: "Junior QA Tester",
      company: "Ayoba / Simfy Africa",
      type: "Full-Time",
      period: "Dec 2022 - Jul 2025",
      location: "Cape Town, Western Cape",
      description: [
        "Conducted manual functional, regression, smoke and exploratory testing across Android, iOS and web application features.",
        "Designed, documented and executed detailed test cases and scenarios based on product requirements and acceptance criteria.",
        "Tested product areas including MicroApps, Explore, Games, channels, advertising, permissions and related platform functionality.",
        "Validated analytics events and application behaviour to ensure features functioned according to requirements.",
        "Managed defects through reporting, retesting and regression, collaborating with developers to verify fixes and protect release quality.",
        "Maintained regression suites and executed automated tests using Playwright and BDD/Cucumber.",
        "Participated in Agile ceremonies including sprint planning, stand-ups, refinement, reviews and retrospectives."
      ]
    },
    {
      role: "Graduate QA Intern",
      company: "Ayoba / Simfy Africa",
      type: "Internship",
      period: "Dec 2021 - Nov 2022",
      location: "Cape Town, Western Cape",
      description: [
        "Performed manual testing of web and mobile applications, including functional, smoke and regression testing.",
        "Designed and executed test cases and documented defects with clear reproduction steps and expected versus actual results.",
        "Developed end-to-end automated tests using Cypress.",
        "Retested resolved defects and supported regression testing and release readiness within an Agile development environment."
      ]
    }
  ];

  const technicalSkills = [
    { category: "Testing Practices", items: ["Manual Testing", "Automation Testing", "Functional", "Regression", "Smoke", "Sanity", "UAT", "Exploratory", "End-to-End"] },
    { category: "Automation & Frameworks", items: ["Playwright", "Cypress", "BDD", "Cucumber"] },
    { category: "API & Databases", items: ["Postman", "REST API Testing", "SQL"] },
    { category: "Languages & Tools", items: ["JavaScript", "TypeScript", "Jira", "Confluence", "Git", "GitHub", "GitHub Actions"] }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-zinc-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Page Title & Profile Introduction */}
        <div className="space-y-4 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Professional Experience
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed max-w-xl">
              QA Engineer with 4+ years of experience testing web and mobile applications across manual and automated environments.
            </p>
          </div>
          
          {/* Download CV CTA for Recruiters */}
          <div className="flex-shrink-0">
            <Link
              href="/resume.pdf" 
              target="_blank"
              data-testid="download-cv-btn"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-blue-400 hover:text-blue-300 font-medium text-sm rounded-lg border border-zinc-800 transition-all shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Full CV (PDF)</span>
            </Link>
          </div>
        </div>

        {/* Technical Skills Section Dashboard */}
        <div className="bg-zinc-900/20 border border-zinc-800/60 rounded-xl p-6 space-y-6">
          <h2 className="text-lg font-bold text-zinc-200 border-b border-zinc-800 pb-2">Technical Skills Core Matrix</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technicalSkills.map((skillGroup, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="text-xs bg-zinc-900 text-zinc-300 border border-zinc-800/80 px-2.5 py-1 rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Professional Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-6 before:w-0.5 before:bg-zinc-800/60 pointer-events-none">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 md:pl-14 group pointer-events-auto">
              <div className="absolute left-2.5 md:left-4 top-1.5 w-3.5 h-3.5 bg-blue-500 rounded-full border-4 border-zinc-950 group-hover:scale-125 transition-transform" />
              
              <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-xl p-6 space-y-4 hover:border-zinc-700 transition-colors shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h2 className="text-xl font-bold text-zinc-100">{exp.role}</h2>
                    <p className="text-sm text-blue-400 font-medium">
                      {exp.company} <span className="text-zinc-600 mx-1.5">•</span> <span className="text-zinc-500 text-xs px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded-full">{exp.type}</span>
                    </p>
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-500 font-medium sm:text-right">
                    <div>{exp.period}</div>
                    <div className="text-xs text-zinc-600 font-normal">{exp.location}</div>
                  </div>
                </div>
                
                <ul className="space-y-2.5 list-disc pl-4 text-zinc-400 text-sm leading-relaxed">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="hover:text-zinc-300 transition-colors">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
