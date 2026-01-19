import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, BarChart3, ShieldCheck } from "lucide-react";

const insights = [
  {
    icon: <BarChart3 className="h-8 w-8 text-yellow-200" />,
    title: "Market Growth",
    desc: "India's floriculture market is growing at 11% annually, set to reach ₹744 billion by 2033."
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-red-300" />,
    title: "Wastage Crisis",
    desc: "Up to 40% of flowers spoil due to poor storage, wasting 2 million tons every year."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-green-300" />,
    title: "Profit Potential",
    desc: "Smart preservation is no longer optional—it is the key to massive profitability."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-200" />,
    title: "Unbroken Chain",
    desc: "Presavia provides the essential infrastructure to capture this growing market."
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden text-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/90 font-bold tracking-wider uppercase text-sm mb-4"
          >
            Did You Know?
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
          >
            Smart Preservation is the <br/>New Standard for Profit
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-blue-50 text-xl leading-relaxed max-w-2xl italic"
          >
            "In a ₹744 billion market, losing 40% to spoilage is no longer acceptable. Presavia solves the ₹2 million ton wastage problem."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/15 backdrop-blur-md border border-white/30 p-6 rounded-xl hover:bg-white/20 transition-colors h-full"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
              <p className="text-blue-50 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-bold"
        >
          👉 Smart preservation isn’t optional anymore — it’s essential for profitability.
        </motion.div>
      </div>
    </section>
  );
}
