import { MapPin, Clock } from "lucide-react";

export default function Locations() {
  const loc = {
    name: "Habra, West Bengal",
    description: "Our exclusive dine-in and authentic dum biryani outlet.",
    address: "Habra, West Bengal, INDIA",
    hours: "11:00 AM - 11:30 PM",
    mapUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Habra,West+Bengal,India",
  };

  return (
    <section id="locations" className="py-24 px-6 md:px-12 bg-black text-white relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-white">
            Our Location
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Visit us in the heart of Habra to experience the authentic taste of বাচ্চার বিরিয়ানি.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-colors duration-300 relative overflow-hidden group">
          
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-8">
              <div>
                <h3 className="text-4xl font-black mb-3 text-orange-400 uppercase tracking-tighter">{loc.name}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{loc.description}</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500/20 p-3 rounded-full shrink-0 mt-1 pb-3 text-orange-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-white/90">Address</h4>
                  <p className="text-white/60 text-lg leading-relaxed">{loc.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500/20 p-3 rounded-full shrink-0 mt-1 pb-3 text-orange-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-white/90">Opening Hours</h4>
                  <p className="text-white/60 text-lg">{loc.hours}</p>
                  <p className="text-white/40 text-sm mt-2 uppercase tracking-widest">Open Every Day</p>
                </div>
              </div>
            </div>

            <div className="flex-1 aspect-square md:aspect-auto bg-[#050505] rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.2394262343616!2d88.6521653567405!3d22.841054254618108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8b10010253d07%3A0xd311e9201d2becad!2sAmerican%20Dadar%20Biriyani%202.0%20(Petuk)!5e0!3m2!1sen!2sin!4v1774544445413!5m2!1sen!2sin" 
                 className="absolute inset-0 w-full h-full border-0"
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
