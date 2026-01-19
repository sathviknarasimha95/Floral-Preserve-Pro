import { motion } from "framer-motion";
import { TrendingUp, Calendar, ArrowRight, ShieldCheck, User } from "lucide-react";

export function About() {
  const storySteps = [
    {
      icon: <div className="relative"><User className="h-6 w-6 text-slate-700" /><Calendar className="h-3 w-3 text-blue-500 absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5 shadow-sm border border-slate-100" /></div>,
      label: "PROCURE",
      person: "Arjun the Florist",
      action: "Buys 50,000 Roses",
      context: "₹10/stem",
      desc: "Arjun secures stock for ₹5,00,000 when prices dip.",
      color: "blue"
    },
    {
      icon: <div className="relative"><ShieldCheck className="h-6 w-6 text-cyan-500" /></div>,
      label: "HOLD",
      person: "30-Day Freshness",
      action: "Locked in Climate",
      context: "Flowers stay perfect",
      desc: "His roses stay fresh in our facility for 30 days.",
      color: "cyan"
    },
    {
      icon: <div className="relative"><User className="h-6 w-6 text-slate-700" /><TrendingUp className="h-3 w-3 text-green-500 absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5 shadow-sm border border-slate-100" /></div>,
      label: "SALE",
      person: "Demand Spikes",
      action: "Sells at ₹50/stem",
      context: "Revenue: ₹25,00,000",
      desc: "Arjun sells fresh stock when prices are at their highest.",
      color: "green"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="about" className="py-16 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-600 font-bold tracking-wider uppercase text-[10px] mb-2"
          >
            THE ARBITRAGE STORY
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-2"
          >
            How Arjun Made ₹20 Lakh in 30 Days
          </motion.h3>
        </div>

        {/* Horizontal Storytelling Cards - Significantly Smaller */}
        <div className="relative mb-12 max-w-5xl mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative z-10"
          >
            {storySteps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col items-center bg-slate-50/50 rounded-2xl p-6 border border-slate-100 hover:bg-white hover:shadow-lg hover:shadow-slate-200/30 transition-all duration-500 group relative"
              >
                {/* Icon Circle - Even Smaller */}
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 border border-slate-50 relative z-10">
                  {step.icon}
                </div>

                {/* Text Content */}
                <div className="space-y-2 text-center relative z-10">
                  <div className="text-[9px] font-bold text-blue-600 uppercase tracking-[0.15em]">
                    {step.label}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 leading-tight">
                    {step.person}
                  </h4>
                  <div className="inline-block bg-white text-slate-800 font-bold px-3 py-1 rounded-full text-[10px] shadow-xs border border-slate-100">
                    {step.action}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">
                    {step.context}
                  </div>
                  <p className="text-slate-500 text-[11px] leading-snug mt-1 max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>

                {/* Vertical Arrow for Mobile */}
                {i < storySteps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 z-20">
                    <ArrowRight className="h-3 w-3 text-slate-300 rotate-90" strokeWidth={3} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* The Result Card - Compact Version */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-950 rounded-[1.5rem] p-6 md:p-10 text-white relative overflow-hidden shadow-2xl max-w-4xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h4 className="text-xl md:text-2xl font-display font-bold mb-3">Arjun's Profit Ledger</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-xs">
                Arjun transformed his margin into a <span className="text-green-400 font-bold underline decoration-green-400/30 underline-offset-4">400% profit engine.</span>
              </p>
              
              <div className="grid grid-cols-2 gap-3 max-w-xs">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="text-slate-500 text-[9px] uppercase font-bold mb-1 tracking-widest">BUY LOW</div>
                  <div className="text-lg font-bold">₹5.0L</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
                  <div className="text-green-400 text-[9px] uppercase font-bold mb-1 tracking-widest">SELL HIGH</div>
                  <div className="text-lg font-bold">₹25.0L</div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-green-500/90 to-emerald-700/90 p-6 md:p-8 rounded-[1.5rem] text-center shadow-lg border border-white/10">
              <div className="text-white/80 text-[10px] uppercase font-bold mb-1 tracking-widest">NET GAIN (30 DAYS)</div>
              <div className="text-4xl md:text-5xl font-display font-bold mb-3 tracking-tighter">₹20,00,000</div>
              <p className="text-white/70 text-xs italic font-light">"I didn't just sell flowers, I traded time."</p>
              <div className="mt-4 pt-4 border-t border-white/10 space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="opacity-70">Storage Cost:</span>
                  <span className="font-bold">-₹35,000</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="opacity-70">Waste:</span>
                  <span className="font-bold text-green-300 uppercase">0%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
