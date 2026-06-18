import myImg from '../assets/aditya.png'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";



const Hero = () => {
  return (
    <section className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-around bg-gray-300 ">
      <div className="pt-12 md:pl-24 md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Hi, I'm <span className="text-[#00B4D8]">Aditya Kumar Singh</span>
        </h1>
        <h2 className="text-3xl font-semibold text-gray-700">Full Stack Developer</h2>
        <p className="mt-6 text-black text-lg max-w-xl mx-auto lg:mx-0">
              I build scalable web applications using React.js, Node.js,
              Express.js, MongoDB, and modern frontend technologies.
        </p>

        
        
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a href='#contact' className="px-8 py-3 rounded-xl text-gray-200 bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 font-semibold">
                Hire Me
              </a>

              <a 
    href="/Resume.pdf"
    target="_blank" 
    rel="noopener noreferrer"
    className="px-8 py-3 rounded-xl border border-cyan-500 text-cyan-600 hover:bg-cyan-500/10 transition-all duration-300 font-semibold text-center"
  >
    View My Resume
  </a>

            </div>
  

         <div className="flex justify-center lg:justify-start gap-5 mt-10">

  <a
    href="https://www.linkedin.com/in/adityaprocoder/"
    className="group w-12 h-12 rounded-full border-2 border-[#00B4D8] bg-slate-200 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
  >
    <FaLinkedin className="text-black group-hover:text-[#0A66C2] transition-colors duration-300" />
  </a>

  <a
    href="https://github.com/adityaprocoders"
    className="group w-12 h-12 rounded-full border-2 border-[#00B4D8] bg-slate-200 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
  >
    <FaGithub className="text-black group-hover:text-[#181717] transition-colors duration-300" />
  </a>

  <a
    href="https://www.instagram.com/adityaprocoders/"
    className="group w-12 h-12 rounded-full border-2 border-[#00B4D8] bg-slate-200 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
  >
    <FaInstagram className="text-black group-hover:text-[#E4405F] transition-colors duration-300" />
  </a>

  <a
    href="https://www.youtube.com/@adityaprocoders"
    className="group w-12 h-12 rounded-full border-2 border-[#00B4D8] bg-slate-200 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
  >
    <FaYoutube className="text-black group-hover:text-[#FF0000] transition-colors duration-300" />
  </a>

  <a
    href="https://www.facebook.com/mradityasingh886/"
    className="group w-12 h-12 rounded-full border-2 border-[#00B4D8] bg-slate-200 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
  >
    <FaFacebook className="text-black group-hover:text-[#1877F2] transition-colors duration-300" />
  </a>

</div>

          </div>

        


      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center ">
       <div className="relative flex items-center justify-center">
       <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-cyan-400/20 rounded-full blur-[150px]"></div>
        <div className="w-full max-w-sm overflow-hidden">
          <img src={myImg} 
            className='relative z-10
                  object-contain'
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
