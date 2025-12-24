import { motion } from "framer-motion";
import { CheckCircle2, BarChart3 } from "lucide-react";
import textureImage from "@assets/generated_images/subtle_frost_texture_background.png";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img src={textureImage} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-green-600 font-bold tracking-wider uppercase text-sm mb-4">The Game Changer</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Turn Seasonal Price <br/>Swings Into Profit
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Traditional cold storage is 5-7 days maximum. Presavia's proprietary technology extends freshness to 30 days—unlocking a game-changing opportunity:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 h-6 w-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Buy Wholesale in Off-Season</h4>
                  <p className="text-slate-600 text-sm">Stock up when Valentine's roses are 70% cheaper. Zero waste for 30 days.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 h-6 w-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Sell Premium When Prices Peak</h4>
                  <p className="text-slate-600 text-sm">Wedding season arrives. Demand skyrockets. Your inventory is perfectly fresh and available.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 h-6 w-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Eliminate Spoilage Risk</h4>
                  <p className="text-slate-600 text-sm">Standard facilities force you to sell fast or lose inventory. With 30 days, you control the timing.</p>
                </div>
              </div>
            </div>

            <p className="text-slate-600 text-base italic">
              "A florist storing 500 crates could buy at $2/stem and sell at $8/stem during peak season. That's a 300x multiplier on your investment."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="space-y-6">
              {/* Profit Scenario Card */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="text-green-600 h-8 w-8" />
                  <h4 className="text-xl font-bold text-slate-900">Profit Example</h4>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-slate-600 mb-1">Off-Season Purchase</div>
                    <div className="text-2xl font-bold text-green-600">500 crates @ $2/stem</div>
                    <div className="text-slate-500">= $5,000 investment</div>
                  </div>

                  <div className="border-t-2 border-slate-200 pt-4">
                    <div className="text-slate-600 mb-1">Peak Season Sale (30 days later)</div>
                    <div className="text-2xl font-bold text-blue-600">500 crates @ $8/stem</div>
                    <div className="text-slate-500">= $20,000 revenue</div>
                  </div>

                  <div className="bg-green-500/10 border border-green-300 rounded-lg p-4 mt-4">
                    <div className="text-slate-600 mb-1">YOUR PROFIT</div>
                    <div className="text-3xl font-bold text-green-600">$15,000</div>
                    <div className="text-xs text-slate-600">300% Return on Storage Cost</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <p className="text-sm text-slate-600"><span className="font-bold text-slate-900">Key Insight:</span> Without Presavia's 30-day freshness, those blooms would wilt in days, forcing you to sell at off-season rates. Timing is everything.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
