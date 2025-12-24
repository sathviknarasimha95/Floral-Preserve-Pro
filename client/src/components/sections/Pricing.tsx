import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Flexible Plans</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Storage Packages</h3>
          <p className="text-slate-600 text-lg">
            Whether you need temporary overflow storage or a permanent hub for your distribution, we have a plan for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow bg-white">
            <h4 className="text-xl font-bold text-slate-900 mb-2">Daily / Short Term</h4>
            <div className="text-4xl font-display font-bold text-primary mb-4">$25<span className="text-base text-slate-500 font-normal">/crate/day</span></div>
            <p className="text-slate-500 text-sm mb-8">Perfect for event florists and sudden overflow.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-slate-600"><Check className="h-4 w-4 text-primary" /> 24/7 Access</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><Check className="h-4 w-4 text-primary" /> Standard Temp (2°C)</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><Check className="h-4 w-4 text-primary" /> Loading Dock Access</li>
            </ul>
            <Button className="w-full bg-slate-100 text-slate-900 hover:bg-slate-200">Get Started</Button>
          </div>

          {/* Pro Plan */}
          <div className="border border-primary rounded-2xl p-8 shadow-2xl shadow-blue-900/10 bg-white relative scale-105 z-10">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Monthly Lease</h4>
            <div className="text-4xl font-display font-bold text-primary mb-4">$450<span className="text-base text-slate-500 font-normal">/pallet/mo</span></div>
            <p className="text-slate-500 text-sm mb-8">For wholesalers requiring dedicated space.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-slate-600"><Check className="h-4 w-4 text-primary" /> Dedicated Shelf Space</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><Check className="h-4 w-4 text-primary" /> Humidity Control</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><Check className="h-4 w-4 text-primary" /> Inventory Reporting</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><Check className="h-4 w-4 text-primary" /> Priority Handling</li>
            </ul>
            <Button className="w-full bg-primary text-white hover:bg-primary/90">Choose Plan</Button>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow bg-white">
            <h4 className="text-xl font-bold text-slate-900 mb-2">Custom Suite</h4>
            <div className="text-4xl font-display font-bold text-primary mb-4">Custom</div>
            <p className="text-slate-500 text-sm mb-8">Full cold room rental for large distributors.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-slate-600"><Check className="h-4 w-4 text-primary" /> Private Cold Room</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><Check className="h-4 w-4 text-primary" /> Custom Temp Settings</li>
              <li className="flex items-center gap-3 text-sm text-slate-600"><Check className="h-4 w-4 text-primary" /> Office Space Included</li>
            </ul>
            <Button className="w-full bg-slate-100 text-slate-900 hover:bg-slate-200">Contact Sales</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
