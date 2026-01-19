import { motion } from "framer-motion";
import { TrendingUp, Calendar, ArrowRight, ShieldCheck, User } from "lucide-react";

export function About() {
  const storySteps = [
    {
      icon: <div className="relative"><User className="h-10 w-10 text-slate-700" /><Calendar className="h-6 w-6 text-blue-500 absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm" /></div>,
      label: "The Smart Procure",
      person: "Arjun the Florist",
      action: "Buys 5,000 Roses",
      context: "Market price is low ($2/stem)",
      desc: "Arjun notices prices have dipped. He secures a massive stock for just $10k.",
      color: "blue"
    },
    {
      icon: <div className="relative"><ShieldCheck className="h-10 w-10 text-cyan-500" /></div>,
      label: "The Presavia Hold",
      person: "30-Day Freshness",
      action: "Locked in Climate",
      context: "Flowers remain perfect",
      desc: "While others' stock wilts, Arjun's roses stay fresh in our facility for 30 days.",
      color: "cyan"
    },
    {
      icon: <div className="relative"><User className="h-10 w-10 text-slate-700" /><TrendingUp className="h-6 w-6 text-green-500 absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm" /></div>,
      label: "The Peak Sale",
      person: "Market Demand Spikes",
      action: "Sells at $8/stem",
      context: "Revenue: $40,000",
      desc: "Wedding season hits. Arjun sells his fresh stock when prices are at their highest.",
      color: "green"
    }
  ];

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
            The Arbitrage Story
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            How Arjun Made $30k in 30 Days
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

        {/* Horizontal Storytelling Path */}
        <div className="relative mb-24 max-w-6xl mx-auto px-4">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-1 bg-slate-100 -z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-4 relative z-10">
            {storySteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.3 }}
                  className="flex flex-col items-center text-center group w-full"
                >
                  {/* Icon Circle */}
                  <div className={`w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 border-4 border-slate-50 relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                    {step.icon}
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2">
                    <div className={`text-[10px] font-bold text-${step.color}-600 uppercase tracking-[0.2em]`}>
                      {step.label}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">{step.person}</h4>
                    <div className="text-sm font-medium text-slate-800 bg-slate-100 inline-block px-3 py-1 rounded-full">
                      {step.action}
                    </div>
                    <div className="text-xs text-slate-500 italic mt-1">{step.context}</div>
                    <p className="text-slate-600 text-sm leading-relaxed mt-4 max-w-[260px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Desktop Connecting Arrow */}
                {i < storySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[36px] translate-x-1/2 left-[calc(33%*${i+1}-8%)]">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <ArrowRight className="h-6 w-6 text-slate-300" strokeWidth={3} />
                    </motion.div>
                  </div>
                )}
                
                {/* Mobile Connecting Arrow */}
                {i < storySteps.length - 1 && (
                  <div className="lg:hidden my-6">
                    <ArrowRight className="h-8 w-8 text-slate-200 rotate-90" strokeWidth={3} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* The Result Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h4 className="text-3xl md:text-4xl font-display font-bold mb-6">Arjun's Profit Ledger</h4>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                By using Presavia as a strategic "Hold" facility, Arjun transformed his usual 15% margin into a <span className="text-green-400 font-bold">300% profit engine.</span>
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="text-slate-500 text-[10px] uppercase font-bold mb-1">Buy Low</div>
                  <div className="text-xl font-bold">$10,000</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
                  <div className="text-green-400 text-[10px] uppercase font-bold mb-1">Sell High</div>
                  <div className="text-xl font-bold">$40,000</div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-green-500 to-emerald-700 p-8 rounded-3xl text-center shadow-2xl transform lg:rotate-2">
              <div className="text-white/80 text-sm uppercase font-bold mb-2">Net Gain in 30 Days</div>
              <div className="text-6xl font-display font-bold mb-4">$30,000</div>
              <p className="text-white/70 text-sm italic">"I didn't just sell flowers, I traded time." — Arjun</p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex justify-between text-sm">
                  <span>Storage Cost:</span>
                  <span className="font-bold">-$450</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>Waste:</span>
                  <span className="font-bold text-green-300">0%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
