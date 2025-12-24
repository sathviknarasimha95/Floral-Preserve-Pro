import { motion } from "framer-motion";
import { Calendar, DollarSign, Target, Lock } from "lucide-react";
import deliveryImage from "@assets/generated_images/refrigerated_floral_logistics_delivery.png";

const services = [
  {
    icon: Calendar,
    title: "30-Day Freshness",
    description: "Proprietary climate system extends bloom life to a full month. Zero quality degradation.",
    metric: "30 days"
  },
  {
    icon: DollarSign,
    title: "Profit Window",
    description: "Capture seasonal price swings from $2 to $8+ per stem. Storage cost: negligible vs. potential gains.",
    metric: "$$$"
  },
  {
    icon: Target,
    title: "Inventory Control",
    description: "Hold inventory strategically. Sell only when margins are highest. Never forced to liquidate.",
    metric: "100% Control"
  },
  {
    icon: Lock,
    title: "Zero Spoilage Risk",
    description: "Climate-controlled facility with 24/7 monitoring. Your inventory is protected and preserved.",
    metric: "Risk Free"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-green-600 font-bold tracking-wider uppercase text-sm mb-4">How It Works</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">The Presavia Advantage</h3>
          <p className="text-slate-600 text-lg">
            Not just cold storage. A strategic business tool that turns market inefficiency into profit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                <service.icon className="h-7 w-7" />
              </div>
              
              <h4 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{service.metric}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
