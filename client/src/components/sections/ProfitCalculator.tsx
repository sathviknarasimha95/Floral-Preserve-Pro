import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

export function ProfitCalculator() {
  const [crateCount, setCrateCount] = useState(500);
  const [costPerStem, setCostPerStem] = useState(10);
  const [salePerStem, setSalePerStem] = useState(50);
  const [stemsPerCrate] = useState(100);

  const totalCost = crateCount * costPerStem * stemsPerCrate;
  const totalRevenue = crateCount * salePerStem * stemsPerCrate;
  const profit = totalRevenue - totalCost;
  const roi = ((profit / totalCost) * 100).toFixed(0);
  const storageMonthly = crateCount * 3000; // Example storage cost in INR

  return (
    <section id="calculator" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-green-600 font-bold tracking-wider uppercase text-sm mb-4">See Your Potential</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Profit Calculator (INR)</h3>
          <p className="text-slate-600 text-lg">
            See exactly how much you could earn by using Presavia for strategic inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8 border-slate-200">
              <div className="space-y-6">
                {/* Crate Count */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-4">
                    How many crates? <span className="text-green-600">{crateCount}</span>
                  </label>
                  <Slider
                    value={[crateCount]}
                    onValueChange={(value) => setCrateCount(value[0])}
                    min={50}
                    max={2000}
                    step={50}
                    className="w-full"
                  />
                  <div className="text-xs text-slate-500 mt-2">50 - 2000 crates</div>
                </div>

                {/* Buy Price */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3">
                    Off-season cost per stem: <span className="text-green-600">₹{costPerStem}</span>
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      value={costPerStem}
                      onChange={(e) => setCostPerStem(parseFloat(e.target.value) || 0)}
                      className="bg-slate-50"
                    />
                  </div>
                </div>

                {/* Sell Price */}
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3">
                    Peak season price per stem: <span className="text-blue-600">₹{salePerStem}</span>
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      value={salePerStem}
                      onChange={(e) => setSalePerStem(parseFloat(e.target.value) || 0)}
                      className="bg-slate-50"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Card className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 border-blue-200">
              <h4 className="text-xs uppercase tracking-wider text-slate-600 font-bold mb-2">Investment</h4>
              <div className="text-3xl font-bold text-slate-900">₹{(totalCost / 100000).toFixed(1)}L</div>
              <p className="text-xs text-slate-600 mt-1">{crateCount} crates @ ₹{costPerStem}/stem</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-slate-50 to-green-50 border-green-200">
              <h4 className="text-xs uppercase tracking-wider text-slate-600 font-bold mb-2">Revenue (30 days)</h4>
              <div className="text-3xl font-bold text-green-600">₹{(totalRevenue / 100000).toFixed(1)}L</div>
              <p className="text-xs text-slate-600 mt-1">{crateCount} crates @ ₹{salePerStem}/stem</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 shadow-lg">
              <h4 className="text-xs uppercase tracking-wider text-green-700 font-bold mb-2">Your Profit</h4>
              <div className="text-4xl font-bold text-green-600">₹{(profit / 100000).toFixed(1)}L</div>
              <div className="mt-3 pt-3 border-t-2 border-green-200">
                <p className="text-xs text-slate-600 mb-1">Monthly Storage Cost</p>
                <p className="text-lg font-bold text-slate-900">₹{(storageMonthly / 100000).toFixed(2)}L</p>
                <p className="text-xs text-green-600 font-bold mt-2">
                  Net After Storage: ₹{((profit - storageMonthly) / 100000).toFixed(1)}L
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-orange-200">
              <h4 className="text-xs uppercase tracking-wider text-slate-600 font-bold mb-2">ROI</h4>
              <div className="text-3xl font-bold text-orange-600">{roi}%</div>
              <p className="text-xs text-slate-600 mt-1">Return on investment in 30 days</p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
