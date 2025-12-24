import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@assets/generated_images/modern_high-tech_floral_cold_storage_facility_interior.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern Cold Storage Facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/85 via-slate-900/70 to-blue-900/60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-3xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 backdrop-blur-md border border-green-400/40 text-green-200 text-sm font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              30 Days Fresh = 300x Profit Potential
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Buy Low,<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-300 to-blue-200">Sell High for 30 Days</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-4 font-light leading-relaxed max-w-2xl">
              The only cold storage that keeps flowers market-fresh for 30 days—500% longer than standard facilities. Buy wholesale when prices plummet. Sell premium when they spike.
            </p>

            <div className="mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 max-w-2xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-300">30</div>
                  <div className="text-sm text-slate-300">Days Fresh</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-300">500%</div>
                  <div className="text-sm text-slate-300">More Than Standard</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">300x</div>
                  <div className="text-sm text-slate-300">Profit Potential</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 text-base h-12 font-bold">
                See Your Profit Model
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-white/20 rounded-full px-8 text-base h-12">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
