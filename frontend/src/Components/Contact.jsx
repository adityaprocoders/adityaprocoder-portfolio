import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

 const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        (error) => { 
          toast.error('Failed to send message.');
        }
      );
  };

  return (
    <section id="contact" className="relative bg-[#081224] py-24 px-6 md:px-12">
    <Toaster position="top-center" />
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Send Message</h3>
          
          {/* form ref aur onSubmit add kiya */}
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input name="user_name" type="text" placeholder="Your Name" className="w-full bg-[#0D1B36] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none" required />
            <input name="user_email" type="email" placeholder="Your Email" className="w-full bg-[#0D1B36] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none" required />
            <input name="subject" type="text" placeholder="Subject" className="w-full bg-[#0D1B36] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none" />
            <textarea name="message" rows="6" placeholder="Tell me about your project..." className="w-full bg-[#0D1B36] border border-white/10 rounded-xl px-5 py-4 text-white resize-none focus:outline-none" required />
            
            <button type="submit" className="w-full py-4 rounded-xl bg-[#00B4D8] text-black font-semibold hover:scale-[1.02] transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;