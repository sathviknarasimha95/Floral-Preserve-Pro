import { motion } from "framer-motion";
import { TrendingUp, Zap, Shield, Clock } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Maximize Margins",
    desc: "Buy low, sell high. Control your sales timing to hit peak demand."
  },
  {
    icon: Clock,
    title: "Extended Window",
    desc: "30 days of freshness = 30 days to find the perfect buyer."
  },
  {
    icon: Zap,
    title: "Eliminate Pressure",
    desc: "No more forced discounts. No race against wilting blooms."
  },
  {
    icon: Shield,
    title: "Guaranteed Freshness",
    desc: "Precision climate control ensures every stem arrives perfect."
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden text-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <h2 className="text-white/90 font-bold tracking-wider uppercase text-sm mb-4">Why Presavia Works</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            The Market Timing <br/>Opportunity
          </h3>
          <p className="text-blue-100 text-lg leading-relaxed max-w-lg">
            Flowers have seasonal price cycles. Standard cold storage forces you to sell immediately. With 30-day freshness, you control when to sell.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/15 backdrop-blur-md border border-white/30 p-6 rounded-xl hover:bg-white/20 transition-colors"
            >
              <benefit.icon className="h-8 w-8 text-yellow-200 mb-4" />
              <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
              <p className="text-blue-50 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
