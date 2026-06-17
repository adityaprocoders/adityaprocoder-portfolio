const Footer = () => {
  const navLinks = ["About", "Projects", "Contact"];
  return (
    <footer className="bg-[#0D1B36] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
           <h1 className=" text-2xl md:text-xl font-bold tracking-wider">
          <span className="text-gray-300">aditya</span>
          <span className="text-[#F7941E]">pro</span>
          <span className="text-[#00B4D8]">coder</span>
        </h1>
          <p className="text-gray-400">
           Designing resilient, high-performance digital ecosystems that scale effortlessly. Let’s build something exceptional together.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
           {navLinks.map((item) => (
              <li><a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-white transition-all duration-300
                after:absolute after:left-0 after:-bottom-1  
                after:w-0 
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                {item}
               </a>
               </li>
            ))}
          
          </ul>
        </div>


        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="text-gray-400">Bihar, India</p>
          <p className="text-[#00B4D8]">adityaprocoder@gmail.com</p>
        </div>
      </div>


      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; 2026 adityaprocoders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;