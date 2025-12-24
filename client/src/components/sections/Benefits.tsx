import { motion } from "framer-motion";
import { Clock, ShieldCheck, Thermometer, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Extended Vase Life",
    desc: "Up to 50% longer shelf life for your inventory."
  },
  {
    icon: Thermometer,
    title: "Precision Control",
    desc: "Temperature maintained within 0.5°C accuracy."
  },
  {
    icon: Zap,
    title: "Power Backup",
    desc: "100% uptime with industrial generator redundancy."
  },
  {
    icon: ShieldCheck,
    title: "24/7 Monitoring",
    desc: "Smart sensors alert our team to any anomalies instantly."
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-primary relative overflow-hidden text-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-white/80 font-bold tracking-wider uppercase text-sm mb-4">Why Choose Presavia?</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Preserving Value,<br/> Maximizing Freshness.
            </h3>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
              Flowers are perishable assets. Our facility is engineered to protect your investment. By maintaining the perfect environment, we help you sell fresher flowers and reduce spoilage costs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-colors"
              >
                <benefit.icon className="h-8 w-8 text-cyan-200 mb-4" />
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-blue-100 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
