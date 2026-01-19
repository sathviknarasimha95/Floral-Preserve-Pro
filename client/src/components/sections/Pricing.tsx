import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      crates: 100,
      monthlyPrice: 35000,
      perCrate: 350,
      features: ["100-crate capacity", "30-day freshness guarantee", "24/7 monitoring", "Basic reporting"]
    },
    {
      name: "Growth",
      crates: 500,
      monthlyPrice: 150000,
      perCrate: 300,
      featured: true,
      features: ["500-crate capacity", "30-day freshness guarantee", "24/7 monitoring", "Detailed inventory tracking", "Priority access", "Seasonal pricing guidance"]
    },
    {
      name: "Enterprise",
      crates: 1000,
      monthlyPrice: 250000,
      perCrate: 250,
      features: ["1000+ crate capacity", "30-day freshness guarantee", "24/7 monitoring", "Advanced analytics", "Dedicated account manager", "Custom climate zones"]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-green-600 font-bold tracking-wider uppercase text-sm mb-4">Simple Pricing</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Storage Plans Built for Profit</h3>
          <p className="text-slate-600 text-lg">
            Store for a month, earn for a year. The math speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 transition-all relative ${
                plan.featured
                  ? "bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-400 shadow-2xl scale-105 z-10"
                  : "bg-white border border-slate-200 hover:shadow-lg"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </div>
              )}

              <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
              <div className="mb-6">
                <div className="text-4xl font-bold text-green-600">₹{(plan.monthlyPrice / 100000).toFixed(1)}L</div>
                <p className="text-slate-600 text-sm mt-1">₹{plan.perCrate}/crate/month</p>
              </div>

              <div className="bg-slate-100 rounded-lg p-4 mb-6">
                <p className="text-2xl font-bold text-slate-900">{plan.crates}</p>
                <p className="text-xs text-slate-600">crate capacity</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-600 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className={`w-full ${plan.featured ? "bg-green-600 hover:bg-green-700 text-white" : "bg-slate-100 text-slate-900 hover:bg-slate-200"}`}>
                Start Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
