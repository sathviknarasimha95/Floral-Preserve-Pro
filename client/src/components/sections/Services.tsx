import { motion } from "framer-motion";
import { HandCoins, Lightbulb, ClipboardList, Layers, Leaf } from "lucide-react";

const workSteps = [
  {
    icon: HandCoins,
    title: "Financial & Loan Support",
    description: "We help you secure financial assistance and loan support required to set up flower preservation technology. Our team guides you in choosing the right investment model, ensuring the solution is affordable, scalable, and profitable from day one.",
    badge: "Funding"
  },
  {
    icon: Lightbulb,
    title: "Technology Advisory",
    description: "Based on your business size and flower volumes, PERSERVIA recommends the most effective preservation technologies designed to extend flower life, reduce spoilage, and deliver strong returns.",
    badge: "Strategy"
  },
  {
    icon: ClipboardList,
    title: "Process Design & Implementation",
    description: "We design and implement a structured preservation process, covering flower intake, storage, handling, and retrieval — ensuring consistent freshness and quality.",
    badge: "Execution"
  },
  {
    icon: Layers,
    title: "360° Preservation & Drying Solution",
    description: "PERSERVIA provides a complete 360-degree solution, including advanced cold storage and drying systems, enabling flowers to be preserved, reused, or repurposed — ensuring near-zero waste.",
    badge: "Solution"
  },
  {
    icon: Leaf,
    title: "Zero Flower Waste Outcome",
    description: "With PERSERVIA, flower wastage is minimized, inventory becomes predictable, and operations turn sustainable — helping your business grow with confidence.",
    badge: "Result"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-green-600 font-bold tracking-wider uppercase text-sm mb-4">How We Work</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">The PERSERVIA Partnership</h3>
          <p className="text-slate-600 text-lg">
            At PERSERVIA, our mission is to achieve zero flower waste while maximizing business profitability. We support you at every stage — from funding the technology to ensuring complete flower utilization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                <step.icon className="h-7 w-7" />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {step.description}
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                <div className="text-sm font-bold text-green-700 uppercase tracking-wider">{step.badge}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
