import { motion } from "framer-motion";
import { TrendingUp, Calendar, ArrowRight, ShieldCheck, User } from "lucide-react";

export function About() {
  const storySteps = [
    {
      icon: <div className="relative"><User className="h-10 w-10 text-slate-700" /><Calendar className="h-6 w-6 text-blue-500 absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm border border-slate-100" /></div>,
      label: "THE SMART PROCURE",
      person: "Arjun the Florist",
      action: "Buys 50,000 Roses",
      context: "Market price is low (₹10/stem)",
      desc: "Arjun notices prices have dipped. He secures a massive stock for just ₹5,00,000.",
      color: "blue"
    },
    {
      icon: <div className="relative"><ShieldCheck className="h-10 w-10 text-cyan-500" /></div>,
      label: "THE PRESAVIA HOLD",
      person: "30-Day Freshness",
      action: "Locked in Climate",
      context: "Flowers remain perfect",
      desc: "While others' stock wilts, Arjun's roses stay fresh in our facility for 30 days.",
      color: "cyan"
    },
    {
      icon: <div className="relative"><User className="h-10 w-10 text-slate-700" /><TrendingUp className="h-6 w-6 text-green-500 absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm border border-slate-100" /></div>,
      label: "THE PEAK SALE",
      person: "Market Demand Spikes",
      action: "Sells at ₹50/stem",
      context: "Revenue: ₹25,00,000",
      desc: "Wedding season hits. Arjun sells his fresh stock when prices are at their highest.",
      color: "green"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-600 font-bold tracking-wider uppercase text-sm mb-4"
          >
            THE ARBITRAGE STORY
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            How Arjun Made ₹20 Lakh in 30 Days
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            See how the 30-day window transforms a standard florist's business into a high-margin trading operation.
          </motion.p>
        </div>

        {/* Horizontal Storytelling Cards */}
        <div className="relative mb-24 max-w-7xl mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10"
          >
            {storySteps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col items-center bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group relative h-full"
              >
                {/* Step Number Bubble (Optional, based on style) */}
                <div className="absolute top-4 right-6 text-slate-100 font-black text-6xl select-none group-hover:text-slate-200 transition-colors">
                  0{i + 1}
                </div>

                {/* Icon Circle */}
                <div className="w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 border border-slate-50 relative z-10">
                  {step.icon}
                </div>

                {/* Text Content */}
                <div className="space-y-4 text-center relative z-10">
                  <div className="text-[12px] font-bold text-blue-600 uppercase tracking-[0.2em]">
                    {step.label}
                  </div>
                  <h4 className="text-2xl font-display font-bold text-slate-900 leading-tight">
                    {step.person}
                  </h4>
                  <div className="inline-block bg-slate-50 text-slate-800 font-bold px-6 py-2 rounded-full text-base">
                    {step.action}
                  </div>
                  <div className="text-sm text-slate-400 italic font-medium">
                    {step.context}
                  </div>
                  <p className="text-slate-500 text-base leading-relaxed mt-4 max-w-[280px] mx-auto">
                    {step.desc}
                  </p>
                </div>

                {/* Vertical Arrow for Mobile Transition */}
                {i < storySteps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-white rounded-full p-2 shadow-md border border-slate-100">
                      <ArrowRight className="h-6 w-6 text-slate-300 rotate-90" strokeWidth={3} />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* The Result Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h4 className="text-4xl md:text-5xl font-display font-bold mb-8">Arjun's Profit Ledger</h4>
              <p className="text-slate-400 text-xl mb-10 leading-relaxed max-w-lg">
                By using Presavia as a strategic "Hold" facility, Arjun transformed his usual 15% margin into a <span className="text-green-400 font-bold underline decoration-green-400/30">400% profit engine.</span>
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <div className="text-slate-500 text-xs uppercase font-bold mb-2 tracking-widest">BUY LOW</div>
                  <div className="text-2xl md:text-3xl font-bold">₹5,00,000</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-2xl">
                  <div className="text-green-400 text-xs uppercase font-bold mb-2 tracking-widest">SELL HIGH</div>
                  <div className="text-2xl md:text-3xl font-bold">₹25,00,000</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-700 p-10 md:p-14 rounded-[2.5rem] text-center shadow-[0_0_50px_rgba(34,197,94,0.3)] transform lg:rotate-2">
              <div className="text-white/80 text-base uppercase font-bold mb-4 tracking-widest">NET GAIN IN 30 DAYS</div>
              <div className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tighter">₹20L</div>
              <p className="text-white/70 text-lg italic font-light">"I didn't just sell flowers, I traded time." — Arjun</p>
              <div className="mt-8 pt-8 border-t border-white/20 space-y-3">
                <div className="flex justify-between text-base">
                  <span className="opacity-80">Storage Cost:</span>
                  <span className="font-bold">-₹35,000</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="opacity-80">Inventory Waste:</span>
                  <span className="font-bold text-green-300">0% (GUARANTEED)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
