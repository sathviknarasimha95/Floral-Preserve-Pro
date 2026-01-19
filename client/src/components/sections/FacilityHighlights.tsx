import { motion } from "framer-motion";
import { ThermometerSnowflake, Clock, Recycle, ShieldCheck } from "lucide-react";

const highlightSteps = [
  {
    icon: <ThermometerSnowflake className="h-10 w-10 text-white" />,
    text: "Maintains optimum temperature and humidity for flower freshness.",
  },
  {
    icon: <Clock className="h-10 w-10 text-white" />,
    text: "Extends shelf life upto standard 7-30 days.",
  },
  {
    icon: <Recycle className="h-10 w-10 text-white" />,
    text: "Minimizes daily waste, stabilizes supply, and maximizes returns.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-white" />,
    text: "Guarantees 100% protection against market volatility.",
  }
];

export function FacilityHighlights() {
  return (
    <section id="highlights" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-[#2A7BB7] mb-4"
          >
            The Power of Presavia Cold Storage
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-900 text-xl font-medium"
          >
            Presavia Cold Storage
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {highlightSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Green Icon Box */}
              <div className="w-32 h-32 bg-[#2D8A3B] rounded-2xl flex items-center justify-center shadow-lg relative z-10 mb-[-40px]">
                {step.icon}
              </div>
              
              {/* White Content Card */}
              <div className="bg-white border-2 border-[#82C341] rounded-[2rem] p-10 pt-16 w-full h-full min-h-[240px] flex items-center justify-center text-center shadow-sm">
                <p className="text-slate-900 text-lg font-bold leading-snug">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
