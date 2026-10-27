import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-zinc-950 text-white overflow-hidden">
      {/* Background visual flair: Ambient subtle tech gradient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Heading Copy & Call To Actions */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full text-blue-400 text-sm font-medium tracking-wide">
              <span>Premium QA Engineering</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Mpumezo Gqoboka</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto md:mx-0 font-normal leading-relaxed">
              Expert Manual & Automation QA Engineer securing software quality from Cape Town. Specializing in functional robustness, cross-platform validation, and high-coverage automation pipelines.
            </p>

            {/* Semantic Action Buttons with clear test anchors */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                <Link
                  href="/about"
                  data-testid="cta-resume"
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 text-center transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  View Experience & CV
                </Link>
                
                <Link
                  href="/contact"
                  data-testid="cta-contact"
                  className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold rounded-lg border border-zinc-800 text-center transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Let's Connect
                </Link>
              </div>
          </div>

          {/* Right Column: Visual Tech Display / Placeholder Frame */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm p-4 shadow-2xl flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              {/* Internal layout block standing in for your profile picture */}
              <div className="text-center space-y-3">
                <Image 
                  src="/mpumezo.jpeg" 
                  alt="Mpumezo QA Portfolio Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />          
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
