import { motion } from "framer-motion";
import { HandCoins, Lightbulb, ClipboardList, Layers, Leaf, ArrowRight } from "lucide-react";

const workSteps = [
  {
    icon: HandCoins,
    title: "Loan & Financial Support",
    description: "We assist in securing loans and financial guidance to set up the right preservation technology with a clear focus on ROI.",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-600"
  },
  {
    icon: Lightbulb,
    title: "Technology Advisory",
    description: "We recommend proven preservation solutions tailored to your flower volumes and business needs.",
    color: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-amber-600"
  },
  {
    icon: ClipboardList,
    title: "Process Setup",
    description: "We design and implement end-to-end preservation processes to maintain freshness and quality.",
    color: "from-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-600"
  },
  {
    icon: Layers,
    title: "360° Preservation Solution",
    description: "From cold storage to drying systems, we provide a complete solution to minimize wastage.",
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-600"
  },
  {
    icon: Leaf,
    title: "Zero Flower Waste",
    description: "Extended flower life, reduced losses, and predictable inventory for sustainable profits.",
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-600"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            How We Work
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight"
          >
            At PERSERVIA, we deliver a <br/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-blue-600">complete pathway</span> to zero waste.
          </motion.h3>
        </div>

        <div className="relative">
          {/* Vertical line for the journey (Desktop) */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-slate-200 ml-12" />

          <div className="space-y-12 relative z-10">
            {workSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
              >
                {/* Timeline Marker */}
                <div className="hidden lg:flex shrink-0 w-24 h-24 rounded-3xl bg-white shadow-xl border border-slate-100 items-center justify-center relative z-20 group-hover:scale-110 transition-transform duration-500">
                  <div className={`absolute inset-2 rounded-2xl bg-linear-to-br ${step.color} -z-10`} />
                  <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                  <div className="absolute -left-12 text-slate-300 font-display font-bold text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </div>
                </div>

                <div className="flex-1 bg-slate-50 rounded-[2rem] p-8 md:p-10 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 border border-transparent hover:border-slate-100">
                  <div className="lg:hidden flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${step.color} flex items-center justify-center`}>
                      <step.icon className={`h-6 w-6 ${step.iconColor}`} />
                    </div>
                    <span className="text-slate-400 font-bold">STEP 0{index + 1}</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-2xl">
                      <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 group-hover:bg-green-600 group-hover:border-green-600 group-hover:text-white transition-all">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
