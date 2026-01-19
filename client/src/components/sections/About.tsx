import { motion } from "framer-motion";
import { TrendingUp, Calendar, ArrowRight, ShieldCheck, User } from "lucide-react";

export function About() {
  const storySteps = [
    {
      icon: <div className="relative"><User className="h-8 w-8 text-slate-700" /><Calendar className="h-4 w-4 text-blue-500 absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-slate-100" /></div>,
      label: "THE SMART PROCURE",
      person: "Arjun the Florist",
      action: "Buys 50,000 Roses",
      context: "Market price is low (₹10/stem)",
      desc: "Arjun secures a massive stock for just ₹5,00,000 when prices dip.",
      color: "blue"
    },
    {
      icon: <div className="relative"><ShieldCheck className="h-8 w-8 text-cyan-500" /></div>,
      label: "THE PRESAVIA HOLD",
      person: "30-Day Freshness",
      action: "Locked in Climate",
      context: "Flowers remain perfect",
      desc: "While others' stock wilts, Arjun's roses stay fresh for 30 days.",
      color: "cyan"
    },
    {
      icon: <div className="relative"><User className="h-8 w-8 text-slate-700" /><TrendingUp className="h-4 w-4 text-green-500 absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-slate-100" /></div>,
      label: "THE PEAK SALE",
      person: "Market Demand Spikes",
      action: "Sells at ₹50/stem",
      context: "Revenue: ₹25,00,000",
      desc: "Wedding season hits. Arjun sells fresh stock when prices are highest.",
      color: "green"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-600 font-bold tracking-wider uppercase text-xs mb-3"
          >
            THE ARBITRAGE STORY
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4"
          >
            How Arjun Made ₹20 Lakh in 30 Days
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base"
          >
            A high-margin trading operation enabled by our 30-day window.
          </motion.p>
        </div>

        {/* Horizontal Storytelling Cards - Smaller & Neater */}
        <div className="relative mb-20 max-w-6xl mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10"
          >
            {storySteps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col items-center bg-slate-50/50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 group relative"
              >
                {/* Icon Circle - Smaller */}
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-6 border border-slate-50 relative z-10">
                  {step.icon}
                </div>

                {/* Text Content */}
                <div className="space-y-3 text-center relative z-10">
                  <div className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em]">
                    {step.label}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 leading-tight">
                    {step.person}
                  </h4>
                  <div className="inline-block bg-white text-slate-800 font-bold px-4 py-1.5 rounded-full text-xs shadow-sm border border-slate-100">
                    {step.action}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {step.context}
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed mt-2 max-w-[220px] mx-auto">
                    {step.desc}
                  </p>
                </div>

                {/* Vertical Arrow for Mobile */}
                {i < storySteps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                    <ArrowRight className="h-4 w-4 text-slate-300 rotate-90" strokeWidth={3} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* The Result Card - Refined & Smaller */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-950 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl max-w-5xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl -mr-40 -mt-40" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <h4 className="text-2xl md:text-3xl font-display font-bold mb-4">Arjun's Profit Ledger</h4>
              <p className="text-slate-400 text-base mb-8 leading-relaxed max-w-md">
                Arjun transformed his usual 15% margin into a <span className="text-green-400 font-bold underline decoration-green-400/30 underline-offset-4">400% profit engine.</span>
              </p>
              
              <div className="grid grid-cols-2 gap-4 max-w-sm">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <div className="text-slate-500 text-[10px] uppercase font-bold mb-1 tracking-widest">BUY LOW</div>
                  <div className="text-xl font-bold">₹5,00,000</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 p-5 rounded-2xl">
                  <div className="text-green-400 text-[10px] uppercase font-bold mb-1 tracking-widest">SELL HIGH</div>
                  <div className="text-xl font-bold">₹25,00,000</div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-green-500 to-emerald-700 p-8 md:p-10 rounded-[2rem] text-center shadow-xl shadow-green-950/20">
              <div className="text-white/80 text-xs uppercase font-bold mb-2 tracking-widest">NET GAIN IN 30 DAYS</div>
              <div className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tighter">₹20,00,000</div>
              <p className="text-white/70 text-sm italic font-light">"I didn't just sell flowers, I traded time."</p>
              <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="opacity-70">Storage Cost:</span>
                  <span className="font-bold">-₹35,000</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="opacity-70">Inventory Waste:</span>
                  <span className="font-bold text-green-300 uppercase">Zero (Guaranteed)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
