import myImg from "../assets/aditya.png";

// Icons ko constant object mein rakhein
const SocialIcons = {
  Instagram: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37Z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
  ),
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
  ),
  Github: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.26 1.23-.26 1.87v4" /><path d="M9 18c-4.5 2-5-2-7-2" /></svg>
  )
};

const About = () => {
  // Social links ka data object
  const socialLinks = [
    { name: "Instagram", icon: SocialIcons.Instagram, url: "https://www.instagram.com/adityaprocoders/" },
    { name: "Linkedin", icon: SocialIcons.Linkedin, url: "https://www.linkedin.com/in/adityaprocoder/" },
    { name: "Github", icon: SocialIcons.Github, url: "https://github.com/adityaprocoders" }
  ];

  return (
    <section id="about" className="relative bg-[#081224] min-h-screen py-24 px-6 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/20 text-sm font-medium">
            About Me
          </span>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl hover:border-[#00B4D8]/30 transition-all duration-500">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Section */}
            <div className="flex flex-col items-center">
              <div className="relative w-56 h-56 p-1 rounded-3xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_40px_rgba(0,180,216,0.35)]">
                <div className="w-full h-full rounded-[20px] overflow-hidden bg-[#0D1B36]">
                  <img src={myImg} alt="Aditya Kumar Singh" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-white text-2xl font-bold mt-6">Aditya Kumar Singh</h3>
              <p className="text-[#00B4D8] text-sm font-semibold uppercase tracking-[3px] mt-2">Founder & Full Stack Engineer</p>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-bold text-white mt-6 p-2">Meet The <span className="text-[#00B4D8]">Founder</span></h2>
              <p className="text-gray-300 leading-8 text-lg mt-4">
                I am the Founder of <span className="font-bold text-white">AdityaProCoders</span>. 
                My mission is to build resilient, high-performance web applications and digital ecosystems that help businesses grow. I specialize in MERN Stack Development, Modern UI/UX Design, Backend Architecture, Cloud Integration, and scalable software systems.
                From responsive websites to full-stack SaaS applications, I focus on creating solutions that are fast, secure, and designed for long-term growth.
              </p>

              {/* Social Buttons */}
              <div className="flex justify-center lg:justify-start gap-4 mt-8">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a key={index} href={item.url} target="_blank" rel="noreferrer" 
                       className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#00B4D8] hover:border-[#00B4D8] hover:-translate-y-1 transition-all duration-300">
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
