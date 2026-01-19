import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

export function About() {
  const steps = [
    {
      icon: <Calendar className="h-8 w-8 text-blue-500" />,
      title: "Buy Wholesale (Off-Season)",
      subtitle: "Prices are at their lowest",
      desc: "Stock up when Valentine's roses are 70% cheaper. Buy at $2/stem.",
      color: "blue"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-cyan-500" />,
      title: "Store for 30 Days",
      subtitle: "500% Longer Preservation",
      desc: "Our technology keeps blooms market-fresh for a full month. Zero waste.",
      color: "cyan"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Sell at Peak Price",
      subtitle: "300% Profit Multiplier",
      desc: "Wedding season spikes. Sell your perfectly fresh inventory at $8/stem.",
      color: "green"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-600 font-bold tracking-wider uppercase text-sm mb-4"
          >
            The Game Changer
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Turn Seasonal Price Swings Into Profit
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            Standard cold storage lasts 5-7 days. Presavia extends that to 30 days, unlocking a massive arbitrage opportunity for florists.
          </motion.p>
        </div>

        {/* Infographic Steps */}
        <div className="relative mb-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100 relative`}>
                  <div className={`absolute inset-0 bg-${step.color}-500/5 rounded-2xl animate-pulse`} />
                  {step.icon}
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                <div className={`text-sm font-bold text-${step.color}-600 uppercase tracking-wide mb-3`}>{step.subtitle}</div>
                <p className="text-slate-600 text-sm leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Math Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase mb-6">
                <TrendingUp className="h-3 w-3" />
                Live Profit Scenario
              </div>
              <h4 className="text-3xl font-display font-bold text-slate-900 mb-6">The Power of 30-Day Timing</h4>
              <p className="text-slate-600 mb-8 italic">
                "A florist storing 500 crates could buy at $2/stem and sell at $8/stem during peak season. That's a 300x multiplier on your investment."
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600 h-5 w-5" />
                  <span className="text-slate-700 font-medium">Eliminate forced off-season sales</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600 h-5 w-5" />
                  <span className="text-slate-700 font-medium">Protect inventory during sudden demand spikes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-600 h-5 w-5" />
                  <span className="text-slate-700 font-medium">30 days = Zero spoilage risk</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-slate-700 pb-4">
                  <div>
                    <div className="text-slate-400 text-xs uppercase font-bold mb-1">Buy Price</div>
                    <div className="text-2xl font-bold">$2.00</div>
                  </div>
                  <ArrowRight className="text-slate-600 mb-2" />
                  <div className="text-right">
                    <div className="text-slate-400 text-xs uppercase font-bold mb-1">Sell Price</div>
                    <div className="text-2xl font-bold text-green-400">$8.00</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-slate-400 text-[10px] uppercase font-bold mb-1">Total Investment</div>
                    <div className="text-xl font-bold">$5,000</div>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <div className="text-green-400 text-[10px] uppercase font-bold mb-1">Gross Revenue</div>
                    <div className="text-xl font-bold">$20,000</div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-linear-to-r from-green-600 to-emerald-600 text-center">
                  <div className="text-white/80 text-xs uppercase font-bold mb-1">Your Net Profit</div>
                  <div className="text-4xl font-display font-bold">$15,000</div>
                  <div className="text-[10px] text-white/60 mt-2 italic">*Based on 500 crates / 30-day storage</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
